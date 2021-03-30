import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';

const giveFeedbackHandler = async (
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
      const { experience } = req.body;
      req.body.user = id;
      const feedback: Models.IFeedback = new Models.Feedback(req.body);
      await feedback
        .populate('coach')
        .populate('user')
        .save()
        .then(function (data) {
          res.status(200).send(data);
          console.log(
            `Feedback for experience ${experience} added to the database!`
          );
        })
        .catch(function (err) {
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

//do i have to use authguard?
export default giveFeedbackHandler;
