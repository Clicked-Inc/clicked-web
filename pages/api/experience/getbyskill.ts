/* 
GET new experience. Route does not have authguard, do not have be logged in to view experiences by skill.
 **/
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongoose';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';

/**
 * @api {get} /api/experience/getbyskill Get Experience by Skill
 * @apiName Get Experience by Skill
 * @apiGroup Experience
 *
 * @apiParam (Body) {String[]} skillName Array of skill names of interest (strings)
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
    "message": "Found experiences that are tagged as: programming.",
    "data": [
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
        },
        {
            "targetSkill": [
                "6081cfbd70111a4e9ce302b8",
                "6081cfbd70111a4e9ce302b9",
                "6081cfbd70111a4e9ce302ba"
            ],
            "feedback": [],
            "currentUsers": [],
            "previousUsers": [],
            "_id": "6081cfbd70111a4e9ce302bb",
            "name": "test_experience_9",
            "category": "audio",
            "experienceType": "solo",
            "coach": "604c859f29f44f82776c1c0f",
            "points": 5,
            "__v": 0
        }
    ]
} * 
 *
 * @apiError 421 IncorrectRequestResponse: A request other than GET was sent.
 * @apiError 404 ExperienceNotFoundResponse: Experiences with specified skills do not exist in database.
 * @apiError 400 GeneralErrorResponse: Error in connecting to database or finding skills.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
{
    "success": false,
    "message": "Currently there are no experiences which cater to programmig."
}
 * 
 */

const getExperiencebySkillHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'GET') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }

  try {
    await connect();
    try {
      const { skillName } = req.body;

      let skill: ObjectId[];
      skill = await Models.SkillScore.find({
        skillName: { $in: skillName },
      }).distinct('_id');

      let experiences: Array<Models.IExperience>;
      experiences = await Models.Experience.find(
        {
          targetSkill: { $in: skill },
        },
        (err) => {
          if (err) {
            console.log(err);
            res.status(400).json({ success: false, message: err });
            return;
          }
        }
      );

      if (!experiences || experiences.length == 0) {
        console.log(
          `Currently there are no experiences which cater to ${skillName}.`
        );
        res.status(404).json({
          success: false,
          message: `Currently there are no experiences which cater to ${skillName}.`,
        });
        return;
      }
      res.status(200).json({
        success: true,
        message: `Found experiences that are tagged as: ${skillName}.`,
        data: experiences,
      });
    } catch (error) {
      console.log('There is an error that we cannot presently determine.');
      console.log(error);
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(400).json({ message: 'Database could not be connected.' });
  }
};

export default getExperiencebySkillHandler;
