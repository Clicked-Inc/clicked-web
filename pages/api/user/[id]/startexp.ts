import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
// import authGuard from '@Api/authGuard';

const userStartExperienceHandler = async (
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
      const { id } = req.query;
      req.body.user = id;
      req.body.dateType = 'start';
      req.body.userType = 'current';
      req.body.startDate = new Date();
      const experienceUsers: Models.IExperienceUsers = new Models.ExperienceUsers(
        req.body
      );
      await experienceUsers
        .populate('experience')
        .populate('user')
        .save()
        .then(function (data) {
          res.status(200).send(data);
          console.log('User has started this added to the database!');
        })
        .catch(function (err) {
          console.log(err);
          res
            .status(400)
            .json({ message: 'User Failed to start this experience' });
          return;
        });
    } catch (e) {
      console.log('There is an error that we cannot presently determine.');
      res.status(400).json({ success: false });
    }
  } catch (e) {
    res.status(404).json({ message: 'User not found.' });
  }
};

//do i have to use authguard?
export default userStartExperienceHandler;
