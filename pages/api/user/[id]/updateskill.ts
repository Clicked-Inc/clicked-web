/**
 * updates skillinterest progress when experience is completed.
 */

import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import checkPermissionLevel from '@Api/checkPermissionLevel';
import generateSkillUpdate from '@Generators/generateSkillUpdate';

type PutRequestBody = {
  skillScore: Array<Models.ISkillScore>;
};

const updateSkillHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await connect();
  const { id } = req.query;
  switch (req.method) {
    case 'PUT':
      try {
        let permissionLevelMet = await checkPermissionLevel(
          req,
          ['admin', 'coach'],
          id
        );
        const userInfo: any = req.query.userInfo;
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
        const user = await Models.User.findById(id);
        const { skillScore }: PutRequestBody = req.body || {};
        const _id = Array.isArray(id) ? id[0] : id;
        if (skillScore != undefined) {
          await generateSkillUpdate(skillScore, user.skillInterests, _id);
        }
        res.status(200).json({
          message: 'User updated',
          user: user,
        });
      } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'User not updated.', error: e });
        return;
      }
      break;

    default:
      res.status(421).json({ message: 'Incorrect request type' });
      break;
  }
};

export default authGuard(updateSkillHandler);
