import { ObjectId, NativeError } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Internal/Models/index';
import connect from '@Internal/Utils/databaseConnection';
import authGuard, { UserAuthInfo } from '@Internal/Api/authGuard';
import checkPermissionLevel from '@Internal/Api/checkPermissionLevel';
import generateSkillInterests from '@Internal/Generators/generateSkillInterests';
import generateGeoPoint from '@Internal/Generators/generateGeoPoint';
import generateEducation from '@Internal/Generators/generateEducation';
import generateExternalExperiences from '@Internal/Generators/generateExternalExperiences';
import cors from '@Internal/Utils/cors';

type PutRequestBody = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  skillInterests: string[];
  profilePic: string;
  location: number[];
  education: Models.IEducation[];
  aspirationType: string;
  externalExperiences: Models.IExternalExperience[];
  points: number;
};

/**
 * @api {get} /api/user/[id] Get User (not Logged In)
 * @apiName Get User (not Logged In)
 * @apiGroup User
 *
 * @apiHeader {String} Authorization authorization token generated using JWT, in the format 'Bearer <token>'.
 *
 * @apiParam (Query) {String} id ObjectId of experience to be retrieved. If set to 'all', all experiences will be retrieved instead.
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
        "role": "coach",
        "password": "$2b$10$e.zXHmzpjbU2jU9sfT2jX.VrSj1JCuvgvlJ5Rb70VheoBQHNGNLaK",
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
 *     HTTP/1.1 400 Bad Request
{
    "message": "User not found."
}
 * 
 */

/** 
 * 
 * @api {put} /api/user/[id] Edit User
 * @apiName Edit User
 * @apiGroup User
 *
 * @apiHeader {String} Authorization authorization token generated using JWT, in the format 'Bearer <token>'.
 *
 * @apiParam (Query) {String} id ObjectId of experience to be edited.
 * @apiParam (Body) {String} name Updated name of experience (optional)
 * @apiParam (Body) {String} category Updated category of experience (optional)
 * @apiParam (Body) {String} experienceType Updated experience type of experience (optional)
 * @apiParam (Body) {ObjectId} coach Updated ObjectId of the new coach of experience (optional)
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
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "data": {
        "targetSkill": [
            "608285f394192969ba013bb9",
            "608285f394192969ba013bba",
            "608285f394192969ba013bbb"
        ],
        "feedback": [],
        "currentUsers": [],
        "previousUsers": [],
        "_id": "608285f394192969ba013bbc",
        "name": "test_edit",
        "category": "audio",
        "experienceType": "solo",
        "coach": "604c859f29f44f82776c1c0f",
        "points": 5,
        "__v": 0
    }
}
 * 
 * @apiError 400 PermissionLevelError: User does not have permission to edit.
 * @apiError 404 UpdatedFailedResposne: Update was improperly formatted or user does not exist in database
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
{
    "message": 'User does not have permission for this request.'
}
 * 
 */

/** 
 * 
 * @api {delete} /api/user/[id] Delete User
 * @apiName Delete User
 * @apiGroup User
 *
 * @apiHeader {String} Authorization authorization token generated using JWT, in the format 'Bearer <token>'.
 *
 * @apiParam (Query) {String} id ObjectId of user to be deleted.
 * 
 * @apiSuccess {String} message Response message 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "message": "User succesfully deleted",
}
 * 
 * @apiError 400 PermissionLevelError: User does not have permission to delete.
 * @apiError 404 UserNotFoundResponse: User does not exist in database.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
{
    "message": 'User does not have permission for this request.'
}
 */

const userRequestHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await cors(req, res);
  await connect();
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      try {
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
      break;

    case 'PUT':
      try {
        let permissionLevelMet = await checkPermissionLevel(
          req,
          'user',
          ['admin'],
          id
        );
        const userInfo: UserAuthInfo = req.body.userInfo;
        const loggedInUserId: string = userInfo.uid;
        if (loggedInUserId === id) {
          permissionLevelMet = true;
        }
        if (!permissionLevelMet) {
          res.status(400).json({
            message: 'User does not have permission for this request.',
          });
          return;
        }
        const {
          firstName,
          lastName,
          email,
          age,
          skillInterests,
          profilePic,
          location,
          education,
          aspirationType,
          externalExperiences,
          points,
        }: PutRequestBody = req.body || {};
        type UpdatePayload = {
          firstName?: string;
          lastName?: string;
          email?: string;
          age?: number;
          profilePic?: string;
          aspirationType?: string;
          $inc?: { points: number };
          $push?: UpdateArrayPayload;
        };
        type UpdateArrayPayload = {
          skillInterests?: ObjectId[];
          education?: ObjectId[];
          externalExperiences?: ObjectId[];
        };
        let updatePayload: UpdatePayload = {};
        let updateArrayPayload: UpdateArrayPayload = {};

        if (firstName != undefined) {
          updatePayload.firstName = firstName;
        }
        if (lastName != undefined) {
          updatePayload.lastName = lastName;
        }
        if (email != undefined) {
          updatePayload.email = email;
        }
        if (age != undefined) {
          updatePayload.age = age;
        }
        if (location != undefined) {
          const geoPoint: Models.IGeoPoint = await generateGeoPoint(location);
          updatePayload.location = geoPoint;
        }
        if (points != undefined) {
          updatePayload.$inc = { points };
        }
        if (aspirationType != undefined) {
          updatePayload.aspirationType = aspirationType;
        }
        if (skillInterests != undefined) {
          const skillInterestArray: ObjectId[] = await generateSkillInterests(
            skillInterests
          );
          updateArrayPayload.skillInterests = skillInterestArray;
        }
        if (profilePic != undefined) {
          updatePayload.profilePic = profilePic;
        }
        if (education != undefined) {
          const educationArray: ObjectId[] = await generateEducation(education);
          updateArrayPayload.education = educationArray;
        }
        if (externalExperiences != undefined) {
          const externalExperiencesArray: ObjectId[] = await generateExternalExperiences(
            externalExperiences
          );
          updateArrayPayload.externalExperiences = externalExperiencesArray;
        }
        updatePayload.$push = updateArrayPayload;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore TS2349
        const updatedUser = await Models.User.findByIdAndUpdate(
          id,
          updatePayload,
          {
            new: true,
            runValidators: true,
          }
        );
        res.status(200).json({
          message: 'User updated',
          user: updatedUser,
        });
      } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'User not updated.', error: e });
        return;
      }
      break;

    case 'DELETE':
      try {
        let permissionLevelMet = await checkPermissionLevel(
          req,
          'user',
          ['admin'],
          id
        );
        const userInfo: UserAuthInfo = req.body.userInfo;
        const loggedInUserId: string = userInfo.uid;
        if (loggedInUserId === id) {
          permissionLevelMet = true;
        }
        if (!permissionLevelMet) {
          res.status(400).json({
            message: 'User does not have permission for this request.',
          });
          return;
        }

        await Models.User.findByIdAndRemove(
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
        res.status(404).json({ message: 'User not updated.', error: e });
      }
      break;

    default:
      res.status(421).json({ message: 'Incorrect request type' });
      break;
  }
};

export default authGuard(userRequestHandler);
