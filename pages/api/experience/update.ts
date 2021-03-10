/* 
PUT/UPDATE new experience
 **/
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '../../../Utils/databaseConnection';

const getExperienceHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'PUT') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }

  try {
    await connect();
    const {
      query: { id },
    } = req;

    try {
      const experience = await Models.Experience.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!experience) {
        return res.status(400).json({ success: false });
      }
      res.status(200).json({ success: true, data: experience });
    } catch (error) {
      res
        .status(400)
        .json({ success: false, message: 'Editing Experience failed' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Database could not be connected.' });
  }
};

export default getExperienceHandler;
