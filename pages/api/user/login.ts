import { NextApiRequest, NextApiResponse } from 'next';
import { NativeError, Model } from 'mongoose';
import * as Models from '../../../src/Models/index';
import connect from '../../../Utils/databaseConnection';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

const loginHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }

  try {
    await connect();
    const { email } = req.body;

    // Retrieve user with the given email
    const user: Models.IUser = await Models.User.findOne(
      { email: email },
      (err: NativeError, user: Models.IUser) => {
        if (err) {
          return;
        }
        return user;
      }
    );

    compare(req.body.password, user.password, function (err, result) {
      const secretKey: string = process.env.JWT_SECRET;
      // result == true
      if (!err && result) {
        sign(
          { uid: user.id },
          secretKey,
          { expiresIn: '2 days' },
          (err, token) => {
            if (token) {
              res.status(200).json({ message: 'success', authToken: token });
            } else {
              res.status(400).json({ message: err });
            }
          }
        );
      } else {
        res.status(401).json({ error: 'Incorrect Password!' });
      }
    });
  } catch (e) {
    // TODO: more specific error codes based on situation
    res.status(400).json({ message: 'Registration failed' });
  }
};

export default loginHandler;
