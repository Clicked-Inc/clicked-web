import { NativeError } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';

const retrieveUserHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'GET') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }
  try {
    await connect();
    const { id } = req.query;
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

export default retrieveUserHandler;
