import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';
const authGuard = (nextApiHandler: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.headers.authorization === undefined) {
    res.status(500).json({
      message: 'Invalid request for protected route: provide authorization',
    });
    return;
  }
  const authToken: string = req.headers.authorization.replace('Bearer ', '');
  return verify(authToken, process.env.JWT_SECRET, async (err, decoded) => {
    if (!err && decoded) {
      if (!req.body) {
        req.body = {};
      }
      req.body.userInfo = decoded;
      return await nextApiHandler(req, res);
    } else {
      res.status(500).json({ message: 'You are not authenticated' });
      return;
    }
  });
};

export type UserAuthInfo = {
  uid: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};
export default authGuard;
