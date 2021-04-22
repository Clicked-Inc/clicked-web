import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import cors from '@Utils/cors';

/**
 * @api {put} /api/user/[id]/givefeedback Give Feedback
 * @apiName End User Experience
 * @apiGroup User
 *
 * @apiParam (Body) {ObjectId} experience ObjectId of experience
 * @apiParam (Body) {ObjectId} coach ObjectId of coach (User) running the experience
 * @apiParam (Body) {String} privacy Privacy level of feedback ('public' or 'private')
 * @apiParam (Body) {String} text Feedback text
 *
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiError 421 IncorrectRequestResponse: A request other than POST was sent.
 * @apiError 404 DatabaseErrorResponse: Error in connecting or querying database.
 * @apiError 400 UpdateFailedResponse: Update failed due to a number of reasons.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Conflict
 */
const giveFeedbackHandler = async (
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
      const { experience } = req.body;
      req.body.user = id;
      const feedback: Models.IFeedback = new Models.Feedback(req.body);
      await feedback
        .populate('coach')
        .populate('user')
        .save()
        .then((data) => {
          res.status(200).send(data);
          console.log(
            `Feedback for experience ${experience} added to the database!`
          );
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json({
            message: `Failed to give feedback for experience ${experience}`,
          });
          return;
        });
      if (!feedback) {
        return res.status(400).json({ success: false });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: 'Feedback could not be added to the database.',
      });
    }
  } catch (e) {
    res.status(404).json({ message: 'Unable to connect to the database.' });
  }
};

export default giveFeedbackHandler;
