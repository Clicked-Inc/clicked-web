import { NativeError } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import checkPermissionLevel from '@Api/checkPermissionLevel';
import generateSkillInterests from '@Utils/generateSkillInterests';
import generateGeoPoint from '@Utils/generateGeoPoint';

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
        let permissionLevelMet = await checkPermissionLevel(req, ['admin'], id);
        const loggedInUserId: string = req.query.userInfo.uid;
        if (loggedInUserId === id) {
          permissionLevelMet = true;
        }
        // TODO: permission level only required if editing a different user
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
          completedExperiences,
          currentExperiences,
        } = req.body || {};

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore TS2349
        let failedUpdates: any = [];
        await Models.User.findById(id, async (err, user) => {
          if (err) {
            res.status(404).json({ message: 'User not found.' });
            return;
          }
          if (firstName != undefined) {
            const originalFirstName = user.firstName;
            user.firstName = firstName;
            try {
              await user.save();
            } catch (e) {
              failedUpdates.push('firstName');
              user.firstName = originalFirstName;
            }
          }
          if (lastName != undefined) {
            const originalLastName = user.lastName;
            user.lastName = lastName;
            try {
              await user.save();
            } catch (e) {
              failedUpdates.push('lastName');
              user.lastName = originalLastName;
            }
          }
          if (email != undefined) {
            const originalEmail = user.email;
            user.email = email;
            try {
              await user.save();
            } catch (e) {
              failedUpdates.push('email');
              user.email = originalEmail;
            }
          }
          if (age != undefined) {
            const originalAge = user.age;
            user.age = age;
            try {
              await user.save();
            } catch (e) {
              failedUpdates.push('age');
              user.age = originalAge;
            }
          }
          if (location != undefined) {
            const originalLocation = user.location;
            const geoPoint: Models.IGeoPoint = generateGeoPoint(location);
            user.location = geoPoint;
            try {
              await user.save();
            } catch (e) {
              failedUpdates.push('location');
              user.location = originalLocation;
            }
          }
          if (points != undefined) {
            const originalPoints = user.points;
            user.points += points;
            try {
              await user.save();
            } catch (e) {
              failedUpdates.push('points');
            }
          }
          if (aspirationType != undefined) {
            const originalAspirationType = user.aspirationType;
            user.aspirationType = aspirationType;
            try {
              await user.save();
            } catch (e) {
              console.log('aspirationtype failed');
              failedUpdates.push('aspirationType');
              user.aspirationType = originalAspirationType;
            }
          }
          if (skillInterests != undefined) {
            const originalSkillInterests = user.skillInterests;
            const skillInterestArray: Models.ISkillInterest[] = generateSkillInterests(
              skillInterests
            );
            user.skillInterests = user.skillInterests.concat(
              skillInterestArray
            );
            try {
              await user.save();
            } catch (e) {
              failedUpdates.push('skillInterests');
              user.skillInterests = originalSkillInterests;
            }
          }
          res.status(200).json({
            message: 'User updated',
            user: user,
            failedUpdates: failedUpdates,
          });
          return;
        });
      } catch (e) {
        res.status(404).json({ message: 'User not updated.' });
        return;
      }
      break;

    case 'DELETE':
      try {
        const permissionLevelMet = await checkPermissionLevel(req, ['admin']);

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
      console.log('Default');
      res.status(421).json({ message: 'Incorrect request type' });
      break;
  }
};

export default authGuard(userRequestHandler);
