/* 
GET experience by experience ID, if id field is empty return all experiences. 
 **/
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '../../../Utils/databaseConnection';

const getExperienceHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'GET') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }

  try {
    await connect();
    const { id } = req.query;

    try {
      const experience = await Models.Experience.find({ _id: id });
      if (!experience) {
        return res.status(400).json({ success: false });
      }
      res.status(200).json({ success: true, data: experience });
    } catch (error) {
      res
        .status(400)
        .json({ success: false, message: 'Getting Experience failed' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Database could not be connected.' });
  }
};

export default getExperienceHandler;
