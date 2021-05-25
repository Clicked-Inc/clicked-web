import { NextApiRequest, NextApiResponse } from 'next';
import { NativeError } from 'mongoose';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import * as Models from '@Internal/Models/index';
import connect from '@Internal/Utils/databaseConnection';
import cors from '@Internal/Utils/cors';

/**
 * @api {post} /api/user/login Login User
 * @apiName Login User
 * @apiGroup User
 *
 * @apiParam (Body) {String} email User's email address (optional if username is included)
 * @apiParam (Body) {String} username User's username (optional if email is included)
 * @apiParam (Body) {String} password User's password
 *
 * @apiSuccess {String} message Success status
 * @apiSuccess {String} authToken Authorization JSONWebToken
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
          "message": "success",
          "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYyMWY1NDZlONzk1YjUiLCJlbWFpbCI6ImFAYS5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTYxOTA3NzcwNywiZXhwIjoxNjIwMjg3MzA3fQ.M1CJiw6b5gsTZbN2R9FTxoGQNWYBxmte0n19kRsOPGM"
        }
 * 
 *
 * @apiError 421 IncorrectRequestResponse: A request other than POST was sent.
 * @apiError 404 UserNotFoundResponse: Username/email does not exist in database.
 * @apiError 401 IncorrectCredentialsResponse: Incorrect password provided.
 * @apiError 400 DatabaseErrorResponse: Error in connecting or querying database
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Conflict
 *     {
 *       "error": "Login requires an email/username"
 *     }
 */
const loginHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await cors(req, res);
  if (req.method !== 'POST') {
    res.status(421).json({ message: 'Incorrect request type' });
    return;
  }
  try {
    await connect();
    const { email = null, username = null, password } = req.body;
    let user: Models.IUser = null;
    if (password == null) {
      res.status(400).json({ message: 'Login requires a password' });
      return;
    } else if (email == null && username == null) {
      res.status(400).json({ message: 'Login requires an email/username' });
      return;
    } else if (email != null) {
      // Retrieve user with the given email
      user = await Models.User.findOne(
        { email },
        (err: NativeError, user: Models.IUser) => {
          if (err) {
            return;
          }
          return user;
        }
      );
    } else {
      // Retrieve user with the given username
      user = await Models.User.findOne(
        { username },
        (err: NativeError, user: Models.IUser) => {
          if (err) {
            return;
          }
          return user;
        }
      );
    }
    // TODO: Decide on ideal expiration time.
    compare(password, user.password, (err, result) => {
      if (!err && result) {
        sign(
          {
            uid: user.id,
            email: user.email,
            role: user.role,
          },
          process.env.JWT_SECRET,
          { expiresIn: '2 weeks' },
          (err, token) => {
            if (token) {
              res.status(200).json({ message: 'success', authToken: token });
            } else {
              res.status(400).json({ message: err });
            }
          }
        );
      } else {
        res.status(401).json({ error: 'Incorrect Password!' });
      }
    });
  } catch (e) {
    // TODO: more specific error codes based on situation
    res.status(404).json({ message: 'Login failed' });
  }
};

export default loginHandler;
