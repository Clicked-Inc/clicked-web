/* 
DELETE experience by ID.
 **/
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '../../../Utils/databaseConnection';

const getExperienceHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'DELETE') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }

  try {
    await connect();
    const {
      query: { id },
    } = req;

    try {
      const deletedExperience = await Models.Experience.deleteOne({
        _id: id,
      });
      if (!deletedExperience) {
        return res.status(400).json({ success: false });
      }
      res.status(200).json({ success: true, data: {} });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(400).json({ message: 'Database could not be connected.' });
  }
};

export default getExperienceHandler;
