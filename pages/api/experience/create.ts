/* 
POST new experience.
 **/
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongoose';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import generateSkillScore from '@Generators/generateSkillScore';

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
      const skillScoreArray: ObjectId[] = await generateSkillScore(targetSkill);
      if (targetSkill != null && !skillScoreArray) {
        res
          .status(400)
          .json({ message: 'Failed to add experience to the database' });
        return;
      }
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
      console.log('There is an error that we cannot presently determine.');
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(400).json({ message: 'Database could not be connected.' });
  }
};

export default createExperienceHandler;
