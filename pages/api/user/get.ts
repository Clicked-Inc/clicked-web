import { NativeError } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import checkPermissionLevel from '@Api/checkPermissionLevel';
import cors from '@Utils/cors';

/**
 * @api {get} /api/user/get Get User (Logged In)
 * @apiName Get User (Logged In)
 * @apiGroup User
 *
 * @apiHeader {String} Authorization authorization token generated using JWT, in the format 'Bearer <token>'.
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
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "message": "User found",
    "user": {
        "education": [],
        "externalExperiences": [],
        "skillInterests": [
            "60621f546e999b7fb35795b3",
            "60621f546e999b7fb35795b4"
        ],
        "points": 0,
        "completedExperiences": [],
        "currentExperiences": [],
        "_id": "60621f546e999b7fb35795b5",
        "email": "a@a.com",
        "username": "a",
        "role": "student",
        "password": "$2b$10$e.zXH2jX.VrSj1JCuvgvlJ5Rb70VheoBQHNGNLaK",
        "firstName": "jb",
        "lastName": "jb",
        "aspirationType": "dive",
        "__v": 0
    }
}
 * 
 *
 * @apiError 404 UserNotFoundResponse: User does not exist in database.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Conflict
 *     {
 *       "message": "User not found."
 *     }
 */
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
