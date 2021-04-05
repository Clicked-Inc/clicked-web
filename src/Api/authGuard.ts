import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';

const authGuard = (nextApiHandler: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const authToken: string = req.headers.authorization.replace('Bearer ', '');
  return verify(authToken, process.env.JWT_SECRET, async (err, decoded) => {
    if (!err && decoded) {
      const obj: any = req.query;
      obj.userInfo = decoded;
      req.query = obj;
      console.log(req.query);
      return await nextApiHandler(req, res);
    } else {
      res.status(500).json({ message: 'You are not authenticated' });
      return;
    }
  });
};

export default authGuard;
