import { NativeError } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import checkPermissionLevel from '@Api/checkPermissionLevel';

const editUserHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await connect();
  const {
    query: { id },
    method,
  } = req;

  if (method !== 'PUT') {
    res.status(421).json({ message: 'Incorrect request type' });
  }

  try {
    const permissionLevelMet = await checkPermissionLevel(req, ['admin'], id);

    if (!permissionLevelMet) {
      res.status(400).json({
        message: 'User does not have permission for this request.',
      });
      return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore TS2349
    const user = await Models.User.findByIdAndUpdate(
      id,
      req.body,
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
    if (user) {
      res.status(200).json({ message: 'User updated', user: user });
      return;
    }
    res.status(404).json({ message: 'User not updated.' });
  } catch (e) {
    res.status(404).json({ message: 'User not updated.' });
  }
};

export default authGuard(editUserHandler);
