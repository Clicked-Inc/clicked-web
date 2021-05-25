<<<<<<< HEAD
import * as Models from '@Models/index';
import { ObjectId } from 'mongoose';
=======
import { ObjectId } from 'mongoose';
import * as Models from '@Models/index';
import checkValidSkills from '@Utils/checkValidSkill';
>>>>>>> main

const generateSkillScore = async (
  skillNames: { skillName: string; progress: number }[]
): Promise<ObjectId[]> => {
<<<<<<< HEAD
  console.log(skillNames);
=======
>>>>>>> main
  let skillScoreIdsArray: ObjectId[] = await Promise.all(
    skillNames.map(
      async (skill): Promise<ObjectId> => {
        try {
<<<<<<< HEAD
          console.log(skill);
          const skillScore: Models.ISkillScore = new Models.SkillScore({
            skillName: skill.skillName,
            progress: skill.progress || 0,
          });
          await skillScore.save();
          return skillScore._id;
=======
          const validSkill = await checkValidSkills(skill.skillName);
          if (validSkill) {
            const skillScore: Models.ISkillScore = new Models.SkillScore({
              skillName: skill.skillName,
              progress: skill.progress || 0,
            });
            await skillScore.save();
            return skillScore._id;
          } else {
            console.log(
              `${skill.skillName} was not added as a skill for this experience as it is not a valid skill.`
            );
            return null;
          }
>>>>>>> main
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
