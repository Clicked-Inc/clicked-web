import * as Models from '@Models/index';

const generateSkillUpdate = async (
  skillNames: Array<Models.ISkillScore>,
  skillInt: string[]
): Promise<void> => {
  skillNames.forEach(
    async (skill): Promise<Models.ISkillInterest> => {
      const fullSkill = await Models.SkillScore.findById(skill);
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore TS2349
        const skillInterest: Models.ISkillInterest = await Models.SkillInterest.findOneAndUpdate(
          { _id: { $in: skillInt }, skillName: fullSkill.skillName },
          { $inc: { progress: fullSkill.progress } },
          {
            new: true,
            runValidators: true,
          }
        );
        if (skillInterest) {
          await skillInterest.save();
        }
        return skillInterest;
      } catch (e) {
        console.log(e);
        return;
      }
    }
  );
};
export default generateSkillUpdate;
