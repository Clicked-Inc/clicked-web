/**
 * updates skillinterest progress when experience is completed.
 */

import { ObjectId } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import checkPermissionLevel from '@Api/checkPermissionLevel';
import generateSkillUpdate from '@Generators/generateSkillUpdate';

type PutRequestBody = {
  skillInterests: Array<Models.ISkillScore>;
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
        const { skillInterests }: PutRequestBody = req.body || {};
        console.log(skillInterests);

        let updatePayload: any = {};
        let updateArrayPayload: any = {};

        if (skillInterests != undefined) {
          console.log(skillInterests);
          const skillInterestArray: ObjectId[] = await generateSkillUpdate(
            skillInterests
          );
          updateArrayPayload.skillInterests = skillInterestArray;
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
