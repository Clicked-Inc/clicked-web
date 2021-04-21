import Cors from 'cors';
const corsHandler = (req, res) => {
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
