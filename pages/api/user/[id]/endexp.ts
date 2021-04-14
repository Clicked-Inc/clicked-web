import { NextApiRequest, NextApiResponse } from 'next';
import { Types, ObjectId } from 'mongoose';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import generateSkillUpdate from '@Generators/generateSkillUpdate';

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
        user: new Types.ObjectId(_id),
        experience: new Types.ObjectId(experience),
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
          let updatePayload: any = {};
          if (points != undefined) {
            let inc: any = {};
            inc.points = points;
            updatePayload.$inc = inc;
          }
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore TS2349
          const updatedUser = await Models.User.findByIdAndUpdate(
            id,
            updatePayload,
            {
              new: true,
              runValidators: true,
            }
          );
          const skillScore = experience.targetSkill;

          const user = await Models.User.findById(id);
          let updateSkill: ObjectId[];
          if (skillScore != undefined) {
            updateSkill = await generateSkillUpdate(
              skillScore,
              user.skillInterests,
              _id
            );
          }

          if (updatedUser && updateSkill?.length) {
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
            console.log('Successfully Ended Expereince.');
            res.status(200).json({ success: true, data: experienceWrapper });
            return;
          } else if (!updatedUser) {
            res.status(400).json({
              success: false,
              data: experienceWrapper,
              message: 'Points failed to update.',
            });
            return;
          } else if (!updateSkill) {
            res.status(400).json({
              success: false,
              data: experienceWrapper,
              message: 'Failed to update skill',
            });
            return;
          }
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
