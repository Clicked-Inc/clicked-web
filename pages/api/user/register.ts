import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcrypt';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import generateSkillInterests from '@Utils/generateSkillInterests';

const registrationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'POST') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }

  try {
    await connect();
    const {
      email,
      username,
      role,
      password,
      firstName,
      lastName,
      aspirationType,
      skillInterests,
    } = req.body;
    const skillInterestArray: Models.ISkillInterest[] = generateSkillInterests(
      skillInterests
    );
    // TODO: create hooks for User schema to encrypt password, validate email, etc.

    hash(password, Number(process.env.saltRounds), async (err, hash) => {
      // Store hash in your password DB.
      const user: Models.IUser = new Models.User({
        email,
        username,
        role,
        password: hash,
        firstName,
        lastName,
        aspirationType,
        skillInterests: skillInterestArray,
      });
      await user.save((err) => {
        if (err) {
          res.status(400).json({ message: 'Registration failed' });
          return;
        }
      });
      res.status(200).json({ message: 'Registration successful', user: user });
    });
  } catch (e) {
    // TODO: more specific error codes based on situation
    res.status(400).json({ message: 'Registration failed' });
  }
};

export default registrationHandler;
