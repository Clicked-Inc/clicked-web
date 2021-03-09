import * as Models from '@Models/index';
const generateSkillInterests = (
  skillNames: string[]
): Models.ISkillInterest[] => {
  const skillInterestArray: Models.ISkillInterest[] = skillNames.map(
    (skillName) => new Models.SkillInterest({ skillName })
  );
  return skillInterestArray;
};
export default generateSkillInterests;
