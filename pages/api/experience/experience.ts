import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '../../../Utils/databaseConnection'; // will be ok when Anjan's code is merged

const experienceHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const {
    query: { id },
    method,
  } = req;

  try {
    await connect();

    switch (method) {
      case 'GET' /* Get a model by its ID */:
        try {
          const experience = await Models.Experience.find({ _id: id });
          if (!experience) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: experience });
        } catch (error) {
          res
            .status(400)
            .json({ success: false, message: 'Getting Experience failed' });
        }
        break;

      case 'PUT' /* Edit a model by its ID */:
        try {
          const experience = await Models.Experience.findByIdAndUpdate(
            id,
            req.body,
            {
              new: true,
              runValidators: true,
            }
          );
          if (!experience) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: experience });
        } catch (error) {
          res
            .status(400)
            .json({ success: false, message: 'Editing Experience failed' });
        }
        break;

      case 'DELETE' /* Delete a model by its ID */:
        try {
          const deletedExperience = await Models.Experience.deleteOne({
            _id: id,
          });
          if (!deletedExperience) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: {} });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;

      case 'POST' /* Create a experience in the database */:
        try {
          const experience: Models.IExperience = new Models.Experience(
            req.body
          );
          await experience.save((err) => {
            if (err) {
              res
                .status(400)
                .json({ message: 'Failed to add experience to the databse' });
              return;
            }
          });
          res
            .status(200)
            .json({ message: 'Experience added to the database!' });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;

      default:
        res.status(400).json({
          success: false,
          message:
            'Request was not one of the following: Post, Get, Delete, Put',
        });
        break;
    }
  } catch (error) {
    res.status(400).json({ message: 'Database could not be connected.' });
  }
};

export default experienceHandler;
