import { NativeError } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';

const retrieveUserHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  switch (req.method) {
    case 'GET':
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

    case 'PUT':
      try {
        await connect();
        const { id } = req.query;
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

    case 'DELETE':
      try {
        await connect();
        const { id } = req.query;
        await Models.User.findByIdAndDelete(
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
        res.status(404).json({ message: 'User not updated.' });
      }
    default:
      res.status(421).json({ message: 'Incorrect request type' });
      return;
  }
};

export default authGuard(retrieveUserHandler);
