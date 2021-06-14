import connect from '@Internal/Utils/databaseConnection';
import * as Models from '@Internal/Models/index';
import { verify } from 'jsonwebtoken';
import { NextApiRequest } from 'next';

// check that current logged in user is matching the current id query

// if not, check that user role is an admin or coach or whatever in list of passed in roles [done]
const checkPermissionLevel = async (
  req: NextApiRequest,
  type: string,
  permissionLevels?: string[],
  id?: string | string[]
): Promise<boolean> => {
  let jwt_payload;
  if (req.headers.authorization == null) {
    return false;
  }
  const token: string = req.headers.authorization.replace('Bearer ', '');
  try {
    jwt_payload = verify(token, process.env.JWT_SECRET);
  } catch (e) {
    console.log(e);
    return false;
  }
  if (id) {
    if (type == 'user' && id === jwt_payload.uid) {
      return true;
    }
    let experience: Array<Models.IExperience>;
    experience = await Models.Experience.find({ _id: id });

    // get user id by coach attribute and compare to id of current user
    if (
      experience &&
      experience.length > 0 &&
      experience[0].coach.toString() === jwt_payload.uid
    ) {
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
