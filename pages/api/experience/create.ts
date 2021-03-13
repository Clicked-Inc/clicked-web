/* 
POST new experience.
 **/
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '../../../Utils/databaseConnection';

const generateSkillScore = (
  skillInfo
  // : (string | number)[][]
): Models.ISkillScore[] => {
  const skillScoreArray: Models.ISkillScore[] = skillInfo.map(
    (skill) => new Models.SkillScore({ skillName: skill[0], score: skill[1] })
  );
  return skillScoreArray;
};

const createExperienceHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }

  try {
    await connect();
    try {
      const { targetSkill } = req.body;
      const skillScoreArray: Models.ISkillScore[] = generateSkillScore(
        targetSkill
      );
      req.body.targetSkill = skillScoreArray;
      const experience: Models.IExperience = new Models.Experience(req.body);
      await experience
        .populate('coach')
        .save()
        .then(function (data) {
          res.status(200).send(data);
          console.log('Experience added to the database!');
        })
        .catch(function (err) {
          console.log(err);
          res
            .status(400)
            .json({ message: 'Failed to add experience to the database' });
          return;
        });
    } catch (error) {
      console.log('error final');
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(400).json({ message: 'Database could not be connected.' });
  }
};

export default createExperienceHandler;
