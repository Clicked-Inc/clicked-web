import { NativeError } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import checkPermissionLevel from '@Api/checkPermissionLevel';
import cors from '@Utils/cors';

const getHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await cors(req, res);
  await connect();
  try {
    const obj: any = req.query.userInfo;
    const id: string = obj.uid;
    const user = await Models.User.findById(
      id,
      (err: NativeError, user: Models.IUser) => {
        if (err) {
          return;
        }
        return user;
      }
    );
    if (user) {
      res.status(200).json({ message: 'User found', user: user });
      return;
    }
    res.status(404).json({ message: 'User not found.' });
  } catch (e) {
    // TODO: more specific error codes based on situation
    res.status(404).json({ message: 'User not found.' });
  }
};
export default authGuard(getHandler);
