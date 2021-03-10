/* 
POST new experience.
 **/
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '../../../Utils/databaseConnection';

const getExperienceHandler = async (
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
      const experience: Models.IExperience = new Models.Experience(req.body);
      await experience.save((err) => {
        if (err) {
          res
            .status(400)
            .json({ message: 'Failed to add experience to the databse' });
          return;
        }
      });
      res.status(200).json({ message: 'Experience added to the database!' });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(400).json({ message: 'Database could not be connected.' });
  }
};

export default getExperienceHandler;
