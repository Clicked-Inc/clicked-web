/* 
GET experience by experience ID, if id field is empty return all experiences. 
 **/
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import checkPermissionLevel from '@Api/checkPermissionLevel';
import cors from '@Utils/cors';

/**
 * @api {get} /api/experience/[id] Get Experience
 * @apiName Get Experience
 * @apiGroup Experience
 *
 * @apiHeader {String} Authorization authorization token generated using JWT, in the format 'Bearer <token>'.
 *
 * @apiParam (Query) {String} id ObjectId of experience to be retrieved. If set to 'all', all experiences will be retrieved instead.
 * 
 * @apiSuccess {Boolean} success Success status
 * @apiSuccess {String} message Response message
 * @apiSuccess {Object[]} data Array of Experience objects. If 'all' is not passed in, an array of one element will be returned.
 * @apiSuccess {ObjectId[]} data.targetSkill Array of ObjectIds of skill scores.
 * @apiSuccess {ObjectId[]} data.feedback Array of ObjectIds of feedback reviews.
 * @apiSuccess {ObjectId[]} data.currentUsers Array of ObjectIds of users currently enrolled in the experience.
 * @apiSuccess {ObjectId[]} data.previousUsers Array of ObjectIds of users who have completed the experience.
 * @apiSuccess {ObjectId} data._id Experience's ObjectId
 * @apiSuccess {String} data.name Experience name
 * @apiSuccess {String} data.category Experience category
 * @apiSuccess {String} data.experienceType Experience type 
 * @apiSuccess {ObjectId} data.coach ObjectId of Experience's coach
 * @apiSuccess {Number} data.points Point value of completing this experience
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "data": [
        {
            "targetSkill": [
                "608285f394192969ba013bb9",
                "608285f394192969ba013bba",
                "608285f394192969ba013bbb"
            ],
            "feedback": [],
            "currentUsers": [],
            "previousUsers": [],
            "_id": "608285f394192969ba013bbc",
            "name": "test_experience_9",
            "category": "audio",
            "experienceType": "solo",
            "coach": "604c859f29f44f82776c1c0f",
            "points": 5,
            "__v": 0
        }
    ],
    "message": "Successful GET of experience 608285f394192969ba013bbc"
}
 * 
 *
 * @apiError 404 ExperienceNotFoundResponse: Experience does not exist in database.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "message": "Getting Experience failed, no experience with id: 608285f394192969ba013bb found."
 * }
 * 
 */

/** 
 * 
 * @api {put} /api/experience/[id] Edit Experience
 * @apiName Edit Experience
 * @apiGroup Experience
 *
 * @apiHeader {String} Authorization authorization token generated using JWT, in the format 'Bearer <token>'.
 *
 * @apiParam (Query) {String} id ObjectId of experience to be edited.
 * @apiParam (Body) {String} name Updated name of experience (optional)
 * @apiParam (Body) {String} category Updated category of experience (optional)
 * @apiParam (Body) {String} experienceType Updated experience type of experience (optional)
 * @apiParam (Body) {ObjectId} coach Updated ObjectId of the new coach of experience (optional)
 * 
 * 
 * @apiSuccess {Boolean} success Success status
 * @apiSuccess {Object} data Experience object.
 * @apiSuccess {ObjectId[]} data.targetSkill Array of ObjectIds of skill scores.
 * @apiSuccess {ObjectId[]} data.feedback Array of ObjectIds of feedback reviews.
 * @apiSuccess {ObjectId[]} data.currentUsers Array of ObjectIds of users currently enrolled in the experience.
 * @apiSuccess {ObjectId[]} data.previousUsers Array of ObjectIds of users who have completed the experience.
 * @apiSuccess {ObjectId} data._id Experience's ObjectId
 * @apiSuccess {String} data.name Experience name
 * @apiSuccess {String} data.category Experience category
 * @apiSuccess {String} data.experienceType Experience type 
 * @apiSuccess {ObjectId} data.coach ObjectId of Experience's coach
 * @apiSuccess {Number} data.points Point value of completing this experience
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
 * @apiError 404 ExperienceNotFoundResponse: Experience does not exist in database.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "message": "Getting Experience failed, no experience with id: 608285f394192969ba013bb found."
 * }
 * 
 */

/** 
 * 
 * @api {delete} /api/experience/[id] Delete Experience
 * @apiName Delete Experience
 * @apiGroup Experience
 *
 * @apiHeader {String} Authorization authorization token generated using JWT, in the format 'Bearer <token>'.
 *
 * @apiParam (Query) {String} id ObjectId of experience to be deleted.
 * 
 * 
 * @apiSuccess {Boolean} success Success status
 * @apiSuccess {String} message Response message
 * @apiSuccess {Object} data Object containing deletion metrics
 * @apiSuccess {Number} data.n Number of matched experiences based on id passed in
 * @apiSuccess {Number} data.ok 1 if operation was successful
 * @apiSuccess {Number} data.deletedCount Number of experiences that were deleted (expected: 1)
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "message": "Successfully deleted experience 608285f394192969ba013bbc",
    "data": {
        "n": 1,
        "ok": 1,
        "deletedCount": 1
    }
}
 * 
 * @apiError 400 PermissionLevelError: User does not have permission to edit.
 * @apiError 404 ExperienceNotFoundResponse: Experience does not exist in database.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
{
    "success": false
}
 */

const requireIdHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await cors(req, res);
  let {
    query: { id },
    method,
  } = req;

  try {
    await connect();
    switch (method) {
      /* Get a model by its ID, if the given ID is 'all' the method authomatically returns all*/
      case 'GET':
        try {
          let experience: Array<Models.IExperience>;
          if (id == 'all') {
            experience = await Models.Experience.find();
          } else {
            experience = await Models.Experience.find({ _id: id });
          }
          if (!experience) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({
            success: true,
            data: experience,
            message: 'Successful GET of experience ' + id,
          });
        } catch (error) {
          res.status(400).json({
            success: false,
            message:
              'Getting Experience failed, no experience with id: ' +
              id +
              ' found.',
          });
        }
        break;

      case 'PUT' /* Edit a model by its ID */:
        try {
          const permissionLevelMet = await checkPermissionLevel(
            req,
            'user',
            ['admin'],
            id
          );
          if (!permissionLevelMet) {
            res.status(400).json({
              message: 'User does not have permission for this request.',
            });
            return;
          }

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore TS2349
          const experience = await Models.Experience.findByIdAndUpdate(
            id,
            req.body,
            {
              new: true,
              runValidators: true,
            }
          );
          if (!experience) {
            return res.status(404).json({ success: false });
          }
          res.status(200).json({ success: true, data: experience });
        } catch (error) {
          res.status(400).json({
            success: false,
            message: 'Editing Experience failed',
          });
        }
        break;

      case 'DELETE' /* Delete a model by its ID */:
        try {
          // const permissionLevelMet = await checkPermissionLevel(
          //   req,
          //   'user',
          //   ['admin'],
          //   id
          // );
          const permissionLevelMet = true;
          if (!permissionLevelMet) {
            res.status(400).json({
              message: 'User does not have permission for this request.',
            });
            return;
          }

          const deletedExperience = await Models.Experience.deleteOne({
            _id: id,
          });
          if (!deletedExperience) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({
            success: true,
            message: 'Successfully deleted experience ' + id,
            data: deletedExperience,
          });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;

      default:
        res.status(400).json({
          success: false,
          message:
            'Request was not one of the following: Post, Get, Delete, Put',
        });
        break;
    }
  } catch (error) {
    res.status(400).json({ message: 'Database could not be connected.' });
  }
};

export default authGuard(requireIdHandler);
