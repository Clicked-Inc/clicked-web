import Cors from 'cors';
<<<<<<< HEAD
const corsHandler = (req, res) => {
=======
import { NextApiRequest, NextApiResponse } from 'next';

const corsHandler = (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<unknown> => {
>>>>>>> main
  return new Promise((resolve, reject) => {
    const middleware = Cors({
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    });
    middleware(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};
export default corsHandler;
