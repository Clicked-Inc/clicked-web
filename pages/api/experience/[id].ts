/* 
GET experience by experience ID, if id field is empty return all experiences. 
 **/
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '../../../Utils/databaseConnection';

const requireIdHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  let {
    query: { id },
    method,
  } = req;

  try {
    await connect();
    switch (method) {
      /* Get a model by its ID, if the given ID is 'all' the method authomatically returns all*/
      case 'GET':
        try {
          let experience: Array<Models.IExperience>;
          if (id == 'all') {
            experience = await Models.Experience.find();
          } else {
            experience = await Models.Experience.find({ _id: id });
          }
          if (!experience) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({
            success: true,
            data: experience,
            message: 'Successful GET of experiene ' + id,
          });
        } catch (error) {
          res.status(400).json({
            success: false,
            message:
              'Getting Experience failed, no experience with id: ' +
              id +
              ' found.',
          });
        }
        break;

      case 'PUT' /* Edit a model by its ID */:
        try {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore TS2349
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
          res.status(200).json({
            success: true,
            message: 'Successfully deleted experience ' + id,
            data: deletedExperience,
          });
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

export default requireIdHandler;