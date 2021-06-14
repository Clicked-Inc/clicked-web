/* 
POST new experience.
 **/
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongoose';
import * as Models from '@Internal/Models/index';
import connect from '@Internal/Utils/databaseConnection';
import authGuard from '@Internal/Api/authGuard';
import cors from '@Internal/Utils/cors';
import generateSkillScore from '@Internal/Generators/generateSkillScore';
/**
 * @api {post} /api/experience/[id]/create Create Experience
 * @apiName Create Experience
 * @apiGroup Experience
 *
 * @apiHeader {String} Authorization authorization token generated using JWT, in the format 'Bearer <token>'.
 * 
 * @apiParam (Body) {String} name Name of experience
 * @apiParam (Body) {String} category Experience category
 * @apiParam (Body) {String} experienceType Experience type
 * @apiParam (Body) {ObjectId} coach ObjectId of experience coach
 * @apiParam (Body) {Object[]} targetSkill Array of target skills for experience
 * @apiParam (Body) {String]} targetSkill.skillName Name of skill
 * @apiParam (Body) {Number} targetSkill.progress Number of progress percentage points (out of 100) that this experience contributes
 * @apiParam (Body) {Number} points Number of overall points that this experience adds to user's profile
 *
 * @apiSuccess {ObjectId[]} targetSkill Array of ObjectIds of skill scores.
 * @apiSuccess {ObjectId[]} feedback Array of ObjectIds of feedback reviews.
 * @apiSuccess {ObjectId[]} currentUsers Array of ObjectIds of users currently enrolled in the experience.
 * @apiSuccess {ObjectId[]} previousUsers Array of ObjectIds of users who have completed the experience.
 * @apiSuccess {ObjectId} _id Experience's ObjectId
 * @apiSuccess {String} name Experience name
 * @apiSuccess {String} category Experience category
 * @apiSuccess {String} experienceType Experience type 
 * @apiSuccess {ObjectId} coach ObjectId of Experience's coach
 * @apiSuccess {Number} points Point value of completing this experience
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "targetSkill": [
        "6081c02f70111a4e9ce302b4",
        "6081c02f70111a4e9ce302b5",
        "6081c02f70111a4e9ce302b6"
    ],
    "feedback": [],
    "currentUsers": [],
    "previousUsers": [],
    "_id": "6081c02f70111a4e9ce302b7",
    "name": "test_experience_9",
    "category": "audio",
    "experienceType": "solo",
    "coach": "604c859f29f44f82776c1c0f",
    "points": 5,
    "__v": 0
}
 *
 * @apiError 421 IncorrectRequestResponse: A request other than POST was sent.
 * @apiError 400 GeneralErrorResponse: General error (database, or improperly formatted input)
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
{
    "message": "Failed to add experience to the database"
}
 */

const createExperienceHandler = async (
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
    try {
      const { targetSkill } = req.body;
      const skillScoreArray: ObjectId[] = await generateSkillScore(targetSkill);
      if (targetSkill != null && !skillScoreArray) {
        res
          .status(400)
          .json({ message: 'Failed to add experience to the database' });
        return;
      }
      delete req.body.userInfo;
      req.body.targetSkill = skillScoreArray;
      const experience: Models.IExperience = new Models.Experience(req.body);
      await experience
        .populate('coach')
        .save()
        .then(function (data) {
          res.status(200).send(data);
          console.log('Experience added to the database!');
        })
        .catch(function (err) {
          console.log(err);
          res
            .status(400)
            .json({ message: 'Failed to add experience to the database' });
          return;
        });
    } catch (error) {
      console.log('There is an error that we cannot presently determine.');
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(400).json({ message: 'Database could not be connected.' });
  }
};

export default authGuard(createExperienceHandler);
