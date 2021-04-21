import * as Models from '@Models/index';
import { ObjectId } from 'mongoose';

const generateSkillScore = async (
  skillNames: { skillName: string; progress: number }[]
): Promise<ObjectId[]> => {
  console.log(skillNames);
  let skillScoreIdsArray: ObjectId[] = await Promise.all(
    skillNames.map(
      async (skill): Promise<ObjectId> => {
        try {
          console.log(skill);
          const skillScore: Models.ISkillScore = new Models.SkillScore({
            skillName: skill.skillName,
            progress: skill.progress || 0,
          });
          await skillScore.save();
          return skillScore._id;
        } catch (e) {
          console.log(e);
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
