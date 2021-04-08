import * as Models from '@Models/index';
import { ObjectId } from 'mongoose';

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