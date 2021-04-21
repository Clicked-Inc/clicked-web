/* 
GET new experience. Route does not have authguard, do not have be logged in to view experiences by skill.
 **/
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongoose';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';

const getExperiencebySkillHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'GET') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }

  try {
    await connect();
    try {
      const { skillName } = req.body;

      let skill: ObjectId[];
      skill = await Models.SkillScore.find({
        skillName: { $in: skillName },
      }).distinct('_id');

      let experiences: Array<Models.IExperience>;
      experiences = await Models.Experience.find(
        {
          targetSkill: { $in: skill },
        },
        (err) => {
          if (err) {
            console.log(err);
            res.status(400).json({ success: false, message: err });
            return;
          }
        }
      );

      if (!experiences || experiences.length == 0) {
        console.log(
          `Currently there are no experiences which cater to ${skillName}.`
        );
        res.status(400).json({
          success: false,
          message: `Currently there are no experiences which cater to ${skillName}.`,
        });
        return;
      }
      res.status(200).json({
        success: true,
        message: `Found experiences that are tagged as: ${skillName}.`,
        data: experiences,
      });
    } catch (error) {
      console.log('There is an error that we cannot presently determine.');
      console.log(error);
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(400).json({ message: 'Database could not be connected.' });
  }
};

export default getExperiencebySkillHandler;
