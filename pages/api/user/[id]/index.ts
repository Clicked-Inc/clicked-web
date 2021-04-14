import { ObjectId, NativeError } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import checkPermissionLevel from '@Api/checkPermissionLevel';
import generateSkillInterests from '@Generators/generateSkillInterests';
import generateGeoPoint from '@Generators/generateGeoPoint';
import generateEducation from '@Generators/generateEducation';
import generateExternalExperiences from '@Generators/generateExternalExperiences';

type PutRequestBody = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  skillInterests: string[];
  profilePic: string;
  location: number[];
  education: Models.IEducation[];
  aspirationType: string;
  externalExperiences: Models.IExternalExperience[];
  points: number;
};

const userRequestHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await connect();
  const { id } = req.query;
  switch (req.method) {
    case 'GET':
      try {
        const user = await Models.User.findById(
          id,
          (err: NativeError, user: Models.IUser) => {
            if (err) {
              return;
            }
            return user;
          }
        );
        if (user) {
          res.status(200).json({ message: 'User found', user: user });
          return;
        }
        res.status(404).json({ message: 'User not found.' });
      } catch (e) {
        // TODO: more specific error codes based on situation
        res.status(404).json({ message: 'User not found.' });
      }
      break;

    case 'PUT':
      try {
        const permissionLevelMet = await checkPermissionLevel(
          req,
          'user',
          ['admin'],
          id
        );
        const userInfo: any = req.query.userInfo;
        const loggedInUserId: string = userInfo.uid;
        if (loggedInUserId === id) {
          permissionLevelMet = true;
        }
        if (!permissionLevelMet) {
          res.status(400).json({
            message: 'User does not have permission for this request.',
          });
          return;
        }
        const {
          firstName,
          lastName,
          email,
          age,
          skillInterests,
          profilePic,
          location,
          education,
          aspirationType,
          externalExperiences,
          points,
        }: PutRequestBody = req.body || {};

        let updatePayload: any = {};
        let updateArrayPayload: any = {};

        if (firstName != undefined) {
          updatePayload.firstName = firstName;
        }
        if (lastName != undefined) {
          updatePayload.lastName = lastName;
        }
        if (email != undefined) {
          updatePayload.email = email;
        }
        if (age != undefined) {
          updatePayload.age = age;
        }
        if (location != undefined) {
          const geoPoint: Models.IGeoPoint = await generateGeoPoint(location);
          updatePayload.location = geoPoint;
        }
        if (points != undefined) {
          let inc: any = {};
          inc.points = points;
          updatePayload.$inc = inc;
        }
        if (aspirationType != undefined) {
          updatePayload.aspirationType = aspirationType;
        }
        if (skillInterests != undefined) {
          const skillInterestArray: ObjectId[] = await generateSkillInterests(
            skillInterests
          );
          updateArrayPayload.skillInterests = skillInterestArray;
        }
        if (profilePic != undefined) {
          updatePayload.profilePic = profilePic;
        }
        if (education != undefined) {
          const educationArray: ObjectId[] = await generateEducation(education);
          updateArrayPayload.education = educationArray;
        }
        if (externalExperiences != undefined) {
          const externalExperiencesArray: ObjectId[] = await generateExternalExperiences(
            externalExperiences
          );
          updateArrayPayload.externalExperiences = externalExperiencesArray;
        }
        updatePayload.$push = updateArrayPayload;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore TS2349
        const updatedUser = await Models.User.findByIdAndUpdate(
          id,
          updatePayload,
          {
            new: true,
            runValidators: true,
          }
        );
        res.status(200).json({
          message: 'User updated',
          user: updatedUser,
        });
      } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'User not updated.', error: e });
        return;
      }
      break;

    case 'DELETE':
      try {
        const permissionLevelMet = await checkPermissionLevel(req, 'user', [
          'admin',
        ]);

        if (!permissionLevelMet) {
          res.status(400).json({
            message: 'User does not have permission for this request.',
          });
          return;
        }

        await Models.User.findByIdAndRemove(
          id,
          {
            new: true,
            runValidators: true,
          },
          (err: NativeError, user: Models.IUser) => {
            if (err) {
              return;
            }
            return user;
          }
        );
        res.status(200).json({ message: 'User succesfully deleted' });
        return;
      } catch (e) {
        res.status(404).json({ message: 'User not updated.', error: e });
      }
      break;

    default:
      res.status(421).json({ message: 'Incorrect request type' });
      break;
  }
};

export default authGuard(userRequestHandler);
