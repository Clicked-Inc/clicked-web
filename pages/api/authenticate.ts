import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';

const authenticate = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  verify(
    req.headers.authorization,
    process.env.JWT_SECRET,
    async (err, decoded) => {
      if (!err && decoded) {
        return await fn(req, res);
      } else {
        res.status(500).json({ message: 'You are not authenticated' });
      }
    }
  );
};

export default authenticate;
