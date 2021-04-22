import { NextApiRequest, NextApiResponse } from 'next';
import { Types, ObjectId } from 'mongoose';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import cors from '@Utils/cors';
import generateSkillUpdate from '@Generators/generateSkillUpdate';

/**
 * @api {put} /api/user/[id]/endexp End User Experience
 * @apiName End User Experience
 * @apiGroup User
 *
 * @apiParam (Body) {ObjectId} experience ObjectId representation of experience to end
 *
 * @apiSuccess {String} success Success status
 * @apiSuccess {Object} data Experience wrapper object that was updated
 * @apiSuccess {ObjectId} data._id ObjectId of experience wrapper object
 * @apiSuccess {Object} data.experience Experience object corresponding to this experienceWrapper
 * @apiSuccess {ObjectId} data.user ObjectId of user object corresponding to this experienceWrapper
 * @apiSuccess {Date} data.startDate Date string representing when the experience was started
 * @apiSuccess {Date} data.endDate Date string representing when the experience was ended
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "data": {
        "_id": "60814c07d8e58a4306aa45ca",
        "experience": {
            "targetSkill": [],
            "feedback": [],
            "currentUsers": [],
            "previousUsers": [],
            "_id": "60701b49728d10b827fee7f8",
            "name": "test_experience_5",
            "category": "audio",
            "experienceType": "solo",
            "coach": "606cb965854b48fab5df7d1f",
            "points": 100,
            "__v": 0
        },
        "user": "60814bfdd8e58a4306aa45c9",
        "startDate": "2021-04-22T10:12:23.173Z",
        "__v": 0
    }
}
 *
 * @apiError 421 IncorrectRequestResponse: A request other than POST was sent.
 * @apiError 404 DatabaseErrorResponse: Error in connecting or querying database.
 * @apiError 400 UpdateFailedResponse: Update failed due to a number of reasons. 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Conflict
{
  "success": false,
  "message": "Ending experience for user failed."
}
 */
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
        user: new Types.ObjectId(_id),
        experience: new Types.ObjectId(experience),
      };
      req.body.endDate = new Date();
      const experienceWrapper: Models.IExperienceWrapper = await Models.ExperienceWrapper.findOne(
        filter
      );

      if (!experienceWrapper) {
        res.status(400).json({
          success: false,
          message: `No experience found with this user ${_id} and experience id: ${experience}`,
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
          console.log(updatedUser, updateSkill);
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
          } else if (!updateSkill?.length) {
            res.status(400).json({
              success: false,
              data: experienceWrapper,
              message: 'Failed to update skill',
            });
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
