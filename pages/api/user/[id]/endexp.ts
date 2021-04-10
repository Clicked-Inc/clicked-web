import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';

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
      req.body.endDate = new Date();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore TS2349
      const experienceWrapper = await Models.ExperienceWrapper.findOneAndUpdate(
        filter,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!experienceWrapper) {
        console.log(
          `No experence found with this user ${_id} and experience id: ${experience}`
        );
        return res.status(400).json({
          success: false,
          message: `No experence found with this user ${_id} and experience id: ${experience}`,
        });
      }
      //TODO: get user skill interest
      const userObj = await Models.User.findById(_id);
      userObj.skillInterests.forEach((element) => {
        console.log(element);
      });
      console.log(userObj);
      res.status(200).json({ success: true, data: experienceWrapper });
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

export default userEndExperienceHandler;
