import * as Models from '@Internal/Models/index';

const checkValidSkill = async (skill: string): Promise<boolean> => {
  const validSkill = await Models.ValidSkills.findOne({ skillName: skill });
  return validSkill ? true : false;
};
export default checkValidSkill;
