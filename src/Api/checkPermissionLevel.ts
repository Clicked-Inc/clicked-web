import connect from '@Utils/databaseConnection';
import * as Models from '@Models/index';
import { verify } from 'jsonwebtoken';
import { NextApiRequest } from 'next';
import { NativeError, Schema } from 'mongoose';

// check that current logged in user is matching the current id query

// if not, check that user role is an admin or coach or whatever in list of passed in roles [done]
const checkPermissionLevel = async (
  req: NextApiRequest,
  type: string,
  permissionLevels?: string[],
  id?: string | string[]
): Promise<boolean> => {
  let jwt_payload;
  const token: string = req.headers.authorization.substring(7);

  try {
    jwt_payload = verify(token, process.env.JWT_SECRET);
  } catch (e) {
    console.log(e);
    return false;
  }

  if (id) {
    if (type == 'user' && id === jwt_payload.id) {
      return true;
    }

    await connect();
    let experience: Array<Models.IExperience>;
    experience = await Models.Experience.find({ _id: id });

    // get user id by coach attribute and compare to id of current user
    if (experience && experience[0].coach.toString() === jwt_payload.id) {
      return true;
    }
  }

  if (permissionLevels) {
    for (let i = 0; i < permissionLevels.length; i++) {
      if (jwt_payload.role === permissionLevels[i]) {
        return true;
      }
    }
  }

  return false;
};

export default checkPermissionLevel;
