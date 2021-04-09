import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';

const authGuard = (nextApiHandler: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
<<<<<<< HEAD
  const authToken: string = req.headers.authorization.substring(7);
=======
  const authToken: string = req.headers.authorization.replace('Bearer ', '');
>>>>>>> 3b2a5f39fa861b12fbf8db72cc3dacdf87e22771
  return verify(authToken, process.env.JWT_SECRET, async (err, decoded) => {
    if (!err && decoded) {
      const obj: any = req.query;
      obj.userInfo = decoded;
      req.query = obj;
      return await nextApiHandler(req, res);
    } else {
      res.status(500).json({ message: 'You are not authenticated' });
      return;
    }
  });
};

export default authGuard;
