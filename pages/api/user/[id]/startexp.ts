import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import cors from '@Utils/cors';

/**
 * @api {post} /api/user/[id]/startexp Start User Experience
 * @apiName Start User Experience
 * @apiGroup User
 *
 * @apiParam (Body) {String} experience ObjectId representation of experience to start
 *
 * @apiSuccess {Object} experienceWrapper Experience wrapper object that was created
 * @apiSuccess {String} _id ObjectId of experience wrapper object
 * @apiSuccess {String} experience ObjectId of experience object corresponding to this experienceWrapper
 * @apiSuccess {String} user ObjectId of user object corresponding to this experienceWrapper
 * @apiSuccess {Date} startDate Date string representing when the experience was started
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "_id": "60814c07d8e58a4306aa45ca",
    "experience": "60701b49728d10b827fee7f8",
    "user": "60814bfdd8e58a4306aa45c9",
    "startDate": "2021-04-22T10:12:23.173Z",
    "__v": 0
}
 *
 * @apiError 421 IncorrectRequestResponse: A request other than POST was sent.
 * @apiError 404 DatabaseErrorResponse: User not found in database.
 * @apiError 400 UpdateFailedResponse: Experience not found or user unable to start experience. 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Conflict
{
    "message": "User Failed to start this experience"
}
 */
const userStartExperienceHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await cors(req, res);
  if (req.method !== 'POST') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }
  try {
    await connect();
    try {
      const { id } = req.query;
      req.body.user = id;
      req.body.startDate = new Date();
      const experienceWrapper: Models.IExperienceWrapper = new Models.ExperienceWrapper(
        req.body
      );
      await experienceWrapper
        .populate('experience')
        .populate('user')
        .save()
        .then(function (data) {
          res.status(200).send(data);
          console.log(
            'User has started this experience and an ExperienceWrapper has been added to the database!'
          );
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

export default authGuard(userStartExperienceHandler);
