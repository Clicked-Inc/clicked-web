import * as Models from '@Internal/Models/index';
import checkValidSkills from '@Internal/Utils/checkValidSkill';
import { ObjectId } from 'mongoose';

const generateSkillInterests = async (
  skillNames: string[]
): Promise<ObjectId[]> => {
  let skillInterestIdsArray: ObjectId[] = await Promise.all(
    skillNames.map(
      async (skillName): Promise<ObjectId> => {
        try {
          const validSkill = await checkValidSkills(skillName);
          if (validSkill) {
            const skillInterest: Models.ISkillInterest = new Models.SkillInterest(
              {
                skillName,
              }
            );
            await skillInterest.save();
            return skillInterest._id;
          } else {
            // console.log(
            //   `${skillName} was not added as a skill for this user as it is not a valid skill.`
            // );
            return null;
          }
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
