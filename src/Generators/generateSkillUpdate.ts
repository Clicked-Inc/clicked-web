import * as Models from '@Models/index';
import { ObjectId } from 'mongoose';

const generateSkillUpdate = async (
  skillNames: Array<Models.ISkillScore>
): Promise<ObjectId[]> => {
  let skillInterestIdsArray: ObjectId[] = await Promise.all(
    skillNames.map(
      async (skill): Promise<ObjectId> => {
        try {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore TS2349
          const skillInterest: Models.ISkillInterest = await Models.SkillInterest.findByIdAndUpdate(
            skill._id,
            {
              skillName: skill.skillName,
              progress: skill.progress,
            },
            {
              new: true,
              runValidators: true,
            }
          );
          await skillInterest.save();
          return skillInterest._id;
        } catch (e) {
          return;
        }
      }
    )
  );

  skillInterestIdsArray = skillInterestIdsArray.filter(
    (element) => element != null && element != undefined
  );
  return skillInterestIdsArray;
};
export default generateSkillUpdate;
