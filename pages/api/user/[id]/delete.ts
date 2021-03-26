import { NativeError } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import checkPermissionLevel from '@Api/checkPermissionLevel';

const deleteUserHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await connect();
  let {
    query: { id },
    method,
  } = req;

  if (method !== 'DELETE') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }

  try {
    const permissionLevelMet = await checkPermissionLevel(req, ['admin']);

    if (!permissionLevelMet) {
      res.status(400).json({
        message: 'User does not have permission for this request.',
      });
      return;
    }

    await Models.User.findByIdAndRemove(
      id,
      {
        new: true,
        runValidators: true,
      },
      (err: NativeError, user: Models.IUser) => {
        if (err) {
          return;
        }
        return user;
      }
    );
    res.status(200).json({ message: 'User succesfully deleted' });
    return;
  } catch (e) {
    res.status(404).json({ message: 'User not updated.', error: e });
  }
};

export default authGuard(deleteUserHandler);
