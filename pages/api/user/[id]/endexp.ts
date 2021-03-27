import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import { ObjectId } from 'mongodb';
// import authGuard from '@Api/authGuard';

const userEndExperienceHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'PUT') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }
  try {
    await connect();
    try {
      const { id } = req.query;
      const _id = Array.isArray(id) ? id[0] : id;
      const { experience } = req.body;
      const filter = {
        user: { $in: [new ObjectId(_id)] },
        experience: { $in: [new ObjectId(experience)] },
      };
      req.body.dateType = 'end';
      req.body.userType = 'previous';
      req.body.endDate = new Date();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore TS2349
      const experienceUser = await Models.ExperienceUsers.findOneAndUpdate(
        filter,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!experienceUser) {
        console.log('no experence found with this filter');
        return res.status(400).json({ success: false });
      }
      res.status(200).json({ success: true, data: experienceUser });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: 'Ending experience for user failed.',
      });
    }
  } catch (e) {
    res.status(404).json({ message: 'Unable to connect to the database.' });
  }
};

//do i have to use authguard?
export default userEndExperienceHandler;
