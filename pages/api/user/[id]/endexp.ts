import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import cors from '@Utils/cors';

const ROOT = process.env.SERVER_ROOT_URI || 'http://localhost:3000/api';

const userEndExperienceHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await cors(req, res);
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
        user: new ObjectId(_id),
        experience: new ObjectId(experience),
      };
      req.body.endDate = new Date();
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
      if (!experienceWrapper) {
        console.log(`No experience found with this filter ${filter}`);
        res.status(400).json({
          success: false,
          message: `No experience found with this filter ${filter}`,
        });
        return;
      } else if (experienceWrapper.endDate) {
        res.status(400).json({
          success: false,
          message: `Experience has already been completed.`,
        });
      } else {
        await experienceWrapper.populate('experience').execPopulate();
        const experience: any = experienceWrapper.experience;
        try {
          const points = <Models.IExperience>experience.points;
          const response = await fetch(`${ROOT}/user/${id}`, {
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
              Authorization: req.headers.authorization,
            },
            body: JSON.stringify({ points }),
          });
          if (response.status == 200) {
            res.status(200).json({ success: true, data: experienceWrapper });
            return;
          }
          res.status(400).json({
            success: false,
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

export default authGuard(userEndExperienceHandler);
