import { ObjectId, NativeError } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import * as Models from '@Models/index';
import connect from '@Utils/databaseConnection';
import authGuard from '@Api/authGuard';
import checkPermissionLevel from '@Api/checkPermissionLevel';
import generateSkillInterests from '@Utils/generateSkillInterests';
import generateGeoPoint from '@Utils/generateGeoPoint';
import generateEducation from '@Utils/generateEducation';
import generateExternalExperiences from '@Utils/generateExternalExperiences';

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
        }: {
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
          completedExperiences: Models.IExperienceWrapper[];
          currentExperiences: Models.IExperienceWrapper[];
        } = req.body || {};
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore TS2349
        await Models.User.findById(id, async (err, user) => {
          try {
            if (err) {
              res.status(404).json({ message: 'User not found.' });
              return;
            }
            if (firstName != undefined) {
              user.firstName = firstName;
            }
            if (lastName != undefined) {
              user.lastName = lastName;
            }
            if (email != undefined) {
              user.email = email;
            }
            if (age != undefined) {
              user.age = age;
            }
            if (location != undefined) {
              const geoPoint: Models.IGeoPoint = await generateGeoPoint(
                location
              );
              user.location = geoPoint;
            }
            if (points != undefined) {
              user.points += points;
            }
            if (aspirationType != undefined) {
              user.aspirationType = aspirationType;
            }
            if (skillInterests != undefined) {
              const skillInterestArray: ObjectId[] = await generateSkillInterests(
                skillInterests
              );
              user.skillInterests = user.skillInterests.concat(
                skillInterestArray
              );
            }
            if (profilePic != undefined) {
              user.profilePic = profilePic;
              await user.save();
            }
            if (education != undefined) {
              const educationArray: ObjectId[] = await generateEducation(
                education
              );
              user.education = user.education.concat(educationArray);
            }
            if (externalExperiences != undefined) {
              const externalExperiencesArray: ObjectId[] = await generateExternalExperiences(
                externalExperiences
              );
              user.externalExperiences = user.externalExperiences.concat(
                externalExperiencesArray
              );
            }
            await user.save();

            res.status(200).json({
              message: 'User updated',
              user: user,
            });
            return;
          } catch (e) {
            res.status(404).json({
              message:
                'User not updated. Atleast one update parameter was formatted incorrectly.',
            });
          }
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
