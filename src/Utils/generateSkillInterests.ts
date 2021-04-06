import * as Models from '@Models/index';
import { ObjectId } from 'mongoose';

const generateSkillInterests = async (
  skillNames: string[]
): Promise<ObjectId[]> => {
  let skillInterestIdsArray: ObjectId[] = await Promise.all(
    skillNames.map(
      async (skillName): Promise<ObjectId> => {
        try {
          const skillInterest: Models.ISkillInterest = new Models.SkillInterest(
            {
              skillName,
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
export default generateSkillInterests;
