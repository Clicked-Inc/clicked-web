import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Internal/Models/index';
import connect from '@Internal/Utils/databaseConnection';
import cors from '@Internal/Utils/cors';
import authGuard from '@Internal/Api/authGuard';

const addValidSkillHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await cors(req, res);
  if (req.method !== 'PUT') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }
  try {
    await connect();
    try {
      const { skill } = req.body;
      const validskill: Models.IValidSkills = new Models.ValidSkills({
        skillName: skill.toLowerCase(),
      });
      await validskill
        .save()
        .then(function (data) {
          res.status(200).send(data);
          console.log(`Valid Skill (${skill}) added to list of valid skills`);
        })
        .catch(function (err) {
          console.log(err);
          res.status(400).json({
            message: `FAILED to add Valid Skill (${skill}) added to list of valid skills. 
                    With error: ${err} recieved.`,
          });
          return;
        });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: 'Adding Valud User failed. ' + `Error recieved was: ${error}`,
      });
      return;
    }
  } catch (e) {
    res.status(404).json({ message: 'Unable to connect to the database.' });
    return;
  }
};

export default authGuard(addValidSkillHandler);
