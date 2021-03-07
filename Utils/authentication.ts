import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as Models from 'src/Models/index';

const verifyAuthToken = (req: NextApiRequest, res: NextApiResponse) => {
  const tokenString: string = req.headers['authorization'];
  const secretKey: string = process.env.JWT_SECRET;
  if (tokenString) {
    const token: string = tokenString.split(' ')[1];
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        res.status(403).json({ message: 'Auth token expired' });
        return;
      }
      req.body.user = user;
    });
  } else {
    return res.status(403).json({ message: 'Token string not passed in' });
  }
};

const encryptPassword = (plaintextPassword, res: NextApiResponse) => {
  const saltRounds: string = process.env.saltRounds;
  return bcrypt.hash(
    plaintextPassword,
    Number(saltRounds),
    (err, hashedPwd) => {
      if (err) {
        res.status(400).json({ error: err, message: 'Encryption Error' });
        return;
      } else {
        return hashedPwd;
      }
    }
  );
};

const verifyPassword = (
  plaintextPassword,
  res: NextApiResponse,
  user: Models.IUser
) => {
  const secretKey: string = process.env.JWT_SECRET;
  const hashedPwd: string = user.password;
  bcrypt.compare(plaintextPassword, hashedPwd, function (err, correct) {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      if (correct) {
        jwt.sign(
          { uid: user.id },
          secretKey,
          { expiresIn: '2 days' },
          (err, token) => {
            res.status(200).json({ message: 'success', token: token });
          }
        );
      } else {
        res.status(401).json({ error: 'Incorrect Password!' });
      }
    }
  });
};
