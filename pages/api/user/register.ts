import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '../../../src/Models/index';

const generateSkillInterests = (arr): Models.ISkillInterest[] => {
  // export interface ISkillInterest extends Document {
  //   skillName: string;
  //   progress: number;
  //   hoursSpent: number;
  // }
  const skillInterestArray: Models.ISkillInterest[] = [];
  arr.forEach((skillName) => {
    const skillInterest = new Models.SkillInterest(skillName);
    skillInterestArray.push(skillInterest);
  });
  return skillInterestArray;
};
export default async function registrationHandler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }
  try {
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
    const user: Models.IUser = new Models.User({
      email: email,
      username: username,
      role: role,
      password: password,
      firstName: firstName,
      lastName: lastName,
      aspirationType: aspirationType,
      skillInterests: skillInterestArray,
    });
    await user.save((err) => {
      if (err) {
        res.status(400).json({ message: 'Registration failed' });
        return;
      }
    });
    res.status(200).json({ message: 'Registration successful' });
  } catch (e) {
    // TODO: more specific error codes based on situation
    res.status(400).json({ message: 'Registration failed' });
  }
}
