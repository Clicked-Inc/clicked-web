import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcrypt';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import generateSkillInterests from '@Generators/generateSkillInterests';
import validateUniqueUser from '@Utils/validateUniqueUser';
import { ObjectId } from 'mongoose';
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
    const uniqueUser: boolean[] = await validateUniqueUser(email, username);
    if (uniqueUser[0] && uniqueUser[1]) {
      const skillInterestArray: ObjectId[] = await generateSkillInterests(
        skillInterests
      );
      await hash(
        password,
        Number(process.env.saltRounds),
        async (err: any, hash: string) => {
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
            res
              .status(200)
              .json({ message: 'Registration successful', user: user });
          });
        }
      );
    } else if (!uniqueUser[0]) {
      res.status(409).json({ message: 'Email already taken.' });
    } else {
      res.status(409).json({ message: 'Username already exists.' });
    }
  } catch (e) {
    // TODO: more specific error codes based on situation
    res.status(400).json({ message: 'Registration failed' });
  }
};

export default registrationHandler;
