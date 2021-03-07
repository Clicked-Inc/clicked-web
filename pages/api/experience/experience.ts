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

  await connect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const experience = await Models.Experience.findById(id);
        if (!experience) {
          return res.status(400).json({ success: false });
        }
        //ADD THAT IF ID == NULL, RETURN ALL EXPERIENCES
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

    default:
      res
        .status(400)
        .json({ success: false, message: 'Deleting Experience failed' });
      break;
  }
};

export default experienceHandler;
