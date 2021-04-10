import { verify } from 'jsonwebtoken';
import { NextApiRequest } from 'next';

// check that current logged in user is matching the current id query

// if not, check that user role is an admin or coach or whatever in list of passed in roles [done]
const checkPermissionLevel = async (
  req: NextApiRequest,
  permissionLevels?: string[],
  id?: string | string[]
): Promise<boolean> => {
  let jwt_payload;

  const token: string = req.headers.authorization.replace('Bearer ', '');

  try {
    jwt_payload = verify(token, process.env.JWT_SECRET);
  } catch (e) {
    console.log(e);
    return false;
  }

  if (id && id === jwt_payload.id) {
    return true;
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
