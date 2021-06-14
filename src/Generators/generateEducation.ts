import * as Models from '@Internal/Models/index';
import { ObjectId } from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const generateEducation = async (array: any[]): Promise<ObjectId[]> => {
  let educationIdsArray: ObjectId[] = await Promise.all(
    array.map(
      async (data): Promise<ObjectId> => {
        try {
          const education: Models.IEducation = new Models.Education(data);
          await education.save();
          return education._id;
        } catch (e) {
          return;
        }
      }
    )
  );
  educationIdsArray = educationIdsArray.filter(
    (element) => element != null && element != undefined
  );
  return educationIdsArray;
};
export default generateEducation;
