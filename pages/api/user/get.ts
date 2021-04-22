import { NativeError } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import checkPermissionLevel from '@Api/checkPermissionLevel';
import cors from '@Utils/cors';

/**
 * @api {get} /api/user/get Get User
 * @apiName Get User
 * @apiGroup User
 *
 * @apiHeader {String} Authorization authorization token generated using JWT, in the format 'Bearer <token>'.
 *
 * @apiSuccess {String} message Success status
 * @apiSuccess {String} authToken Authorization JSONWebToken
 *
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
