import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import mongoose, { ObjectId } from 'mongoose';
// import ObjectId from 'mongodb';

const ROOT = process.env.SERVER_ROOT_URI || 'http://localhost:3000/api';

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
        user: new mongoose.Types.ObjectId(_id),
        experience: new mongoose.Types.ObjectId(experience),
      };
      req.body.endDate = new Date();
      const experienceWrapper: Models.IExperienceWrapper = await Models.ExperienceWrapper.findOne(
        filter
      );
      if (!experienceWrapper) {
        console.log(
          `No experence found with this user ${_id} and experience id: ${experience}`
        );
        res.status(400).json({
          success: false,
          message: `No experence found with this user ${_id} and experience id: ${experience}`,
        });
        return;
        // } else if (experienceWrapper.endDate) {
        // res.status(400).json({
        //     success: false,
        //     message: `Experience has already been completed.`,
        //   });
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore TS2349
        const experienceWrapper: Models.IExperienceWrapper = await Models.ExperienceWrapper.findOneAndUpdate(
          filter,
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        await experienceWrapper.populate('experience').execPopulate();
        const experience: any = experienceWrapper.experience;
        try {
          const points = <Models.IExperience>experience.points;
          const skillInterests = experience.targetSkill;
          // result = skillInterests.map((o: any) => {
          //   let obj = Object.assign({}, o);
          //   delete obj._id;
          //   console.log(obj);
          //   return obj;
          // });
          const response = await fetch(`${ROOT}/user/${id}`, {
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
              Authorization: req.headers.authorization,
            },
            body: JSON.stringify({ points }),
          });
          const updateSkill = await fetch(`${ROOT}/user/${id}/updateskill`, {
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
              Authorization: req.headers.authorization,
            },
            body: JSON.stringify({ skillInterests }),
          });
          // console.log(experience.targetSkill);

          if (response.status == 200) {
            res.status(200).json({ success: true, data: experienceWrapper });
            return;
          }
          res.status(400).json({
            success: false,
            data: experienceWrapper,
            message: 'Points failed to update.',
          });
          return;
        } catch (error) {
          console.log(error);
          res.status(400).json({
            success: false,
            message: 'Ending experience for user failed.',
          });
          return;
        }
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: 'Ending experience for user failed.',
      });
      return;
    }
  } catch (e) {
    res.status(404).json({ message: 'Unable to connect to the database.' });
    return;
  }
};

export default userEndExperienceHandler;
