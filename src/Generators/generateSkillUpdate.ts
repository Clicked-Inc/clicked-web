import * as Models from '@Internal/Models/index';
import { ObjectId } from 'mongoose';

const generateSkillUpdate = async (
<<<<<<< HEAD
  skillScore: Array<Models.ISkillScore>,
=======
  skillScore: Array<ObjectId>,
>>>>>>> main
  userSkillInterest: string[],
  userId: string
): Promise<ObjectId[]> => {
  let updatedSkillArray: ObjectId[] = await Promise.all(
    skillScore.map(
      async (skill): Promise<ObjectId> => {
<<<<<<< HEAD
        // console.log(skill);
=======
>>>>>>> main
        const fullSkill = await Models.SkillScore.findById(skill);
        try {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore TS2349
          const skillInterest: Models.ISkillInterest = await Models.SkillInterest.findOneAndUpdate(
            { _id: { $in: userSkillInterest }, skillName: fullSkill.skillName },
            { $inc: { progress: fullSkill.progress } },
            {
              new: true,
              runValidators: true,
            }
          );
          if (skillInterest) {
            await skillInterest.save();
            return skillInterest._id;
          } else {
            const addSkillInterest: Models.ISkillInterest = new Models.SkillInterest(
              {
                skillName: fullSkill.skillName,
                progress: fullSkill.progress,
              }
            );
            await addSkillInterest.save();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore TS2349
            await Models.User.findById(userId, (err, user) => {
              if (err) return;
              user.skillInterests.push(addSkillInterest);
              user.save((err) => {
                if (err) return;
              });
            });
            return addSkillInterest._id;
          }
        } catch (e) {
          console.log(e);
          return;
        }
      }
    )
  );
  updatedSkillArray = updatedSkillArray.filter(
    (element) => element != null && element != undefined
  );
  return updatedSkillArray;
};
export default generateSkillUpdate;
