import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcrypt';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import generateSkillInterests from '@Generators/generateSkillInterests';
import validateUniqueUser from '@Utils/validateUniqueUser';
import { ObjectId, Error } from 'mongoose';
import cors from '@Utils/cors';

/**
 * @api {post} /pages/user/register Register User
 * @apiName Register User
 * @apiGroup User
 *
 * @apiParam (Body) {String} email User's email address (unique)
 * @apiParam (Body) {String} username User's username (unique)
 * @apiParam (Body) {String} role User's role ('student' or 'admin' or 'coach')
 * @apiParam (Body) {String} password User's password
 * @apiParam (Body) {String} firstName User's first name
 * @apiParam (Body) {String} lastName User's last name
 * @apiParam (Body) {String} aspirationType User's aspiration type ('explore' or 'dive')
 * @apiParam (Body) {String[]} skillInterests User's skill interests
 * @apiParam (Body) {String} biography User's biography
 * @apiParam (Body) {Number} age User's age
 * @apiParam (Body) {String} profilePic User's profile picture url
 *
 * @apiSuccess {String} message Success status
 * @apiSuccess {Object} user User object persisted in MongoDB
 * @apiSuccess {Number} user.age User's age
 * @apiSuccess {String} user.email User's email (unique)
 * @apiSuccess {String} user.username User's username (unique)
 * @apiSuccess {String} user.role User's role ('student' or 'admin' or 'coach')
 * @apiSuccess {String} user.password User's password
 * @apiSuccess {String} user.firstName User's first name
 * @apiSuccess {String} user.lastName User's last name
 * @apiSuccess {String} user.profilePic User's profile picture URL
 * @apiSuccess {String} user.aspirationType User's aspiration type ('explore' or 'dive')
 * @apiSuccess {String} user.biography User's biography
 * @apiSuccess {Number} user.age User's age
 * @apiSuccess {ObjectId[]} user.skillInterests Array of ObjectIds corresponding to user's skill interests
 * @apiSuccess {ObjectId[]} user.education Array of ObjectIds corresponding to user's education backgrounds
 * @apiSuccess {ObjectId[]} user.externalExperiences Array of ObjectIds corresponding to user's external experiences
 * @apiSuccess {Number} user.points User's points
 * @apiSuccess {ObjectId[]} user.completedExperiences Array of ObjectIds corresponding to user's completed experiences
 * @apiSuccess {ObjectId[]} user.currentExperiences Array of ObjectIds corresponding to user's current experiences
 * @apiSuccess {ObjectId} user._id User's ObjectId
 * @apiSuccess {Number} user.points User's points
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       {
    "message": "Registration successful",
    "user": {
        "education": [],
        "externalExperiences": [],
        "skillInterests": [
            "6081225b8b02e93bba2eda65",
            "6081225b8b02e93bba2eda66"
        ],
        "points": 0,
        "completedExperiences": [],
        "currentExperiences": [],
        "_id": "6081225c8b02e93bba2eda67",
        "email": "eee@e.com",
        "username": "eee",
        "role": "student",
        "password": "$2b$10$/AbZJjkzmjF0y0ic5F7zM.R.0Bi8Zc2QUgOgHOtjDviAyTAiyb.xu",
        "firstName": "rachel",
        "lastName": "jb",
        "aspirationType": "dive",
        "__v": 0
    }
}
 * 
 *
 * @apiError 421 IncorrectRequestResponse: A request other than POST was sent.
 * @apiError 409 UserCollisionResponse Email: or username is already in use.
 * @apiError 400 RegisterDatabaseErrorResponse: Error in connecting or saving to database
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "error": "Email already taken."
 *     }
 */
const registrationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await cors(req, res);
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
              if (err instanceof Error.ValidationError) {
                for (const field in err.errors) {
                  res.status(400).json({ message: field });
                  return;
                }
              }
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
    console.log(e);
    // TODO: more specific error codes based on situation
    res.status(400).json({ message: 'Registration failed' });
  }
};

export default registrationHandler;
