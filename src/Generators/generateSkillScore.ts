import * as Models from '@Models/index';
import { ObjectId } from 'mongoose';

const generateSkillScore = async (
  skillNames: (string | number)[][]
): Promise<ObjectId[]> => {
  let skillScoreIdsArray: ObjectId[] = await Promise.all(
    skillNames.map(
      async (skill): Promise<ObjectId> => {
        try {
          const skillScore: Models.ISkillScore = new Models.SkillScore({
            skillName: skill[0],
            progress: skill[1],
          });
          await skillScore.save();
          return skillScore._id;
        } catch (e) {
          return;
        }
      }
    )
  );

  skillScoreIdsArray = skillScoreIdsArray.filter(
    (element) => element != null && element != undefined
  );
  return skillScoreIdsArray;
};
export default generateSkillScore;
