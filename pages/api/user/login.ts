import { NextApiRequest, NextApiResponse } from 'next';
import { NativeError } from 'mongoose';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';

const loginHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'GET') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }

  try {
    await connect();
    const { email = null, username = null, password } = req.body;
    let user: Models.IUser = null;
    if (password == null) {
      res.status(400).json({ message: 'Login requires a password' });
      return;
    } else if (email == null && username == null) {
      res.status(400).json({ message: 'Login requires an email/username' });
      return;
    } else if (email != null) {
      // Retrieve user with the given email
      user = await Models.User.findOne(
        { email },
        (err: NativeError, user: Models.IUser) => {
          if (err) {
            return;
          }
          return user;
        }
      );
    } else {
      // Retrieve user with the given username
      user = await Models.User.findOne(
        { username },
        (err: NativeError, user: Models.IUser) => {
          if (err) {
            return;
          }
          return user;
        }
      );
    }
    // TODO: Decide on ideal expiration time.
    compare(password, user.password, (err, result) => {
      if (!err && result) {
        sign(
          {
            uid: user.id,
            email: user.email,
            role: user.role,
          },
          process.env.JWT_SECRET,
          { expiresIn: '2 weeks' },
          (err, token) => {
            console.log(password, user.password, result, err);
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
