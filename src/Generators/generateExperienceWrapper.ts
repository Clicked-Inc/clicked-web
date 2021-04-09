import * as Models from '@Models/index';
import { ObjectId } from 'mongoose';
const generateExperienceWrapper = async (array: any[]): Promise<ObjectId[]> => {
  let experienceWrapperIdsArray: ObjectId[] = await Promise.all(
    array.map(
      async (data): Promise<ObjectId> => {
        try {
          const experienceWrapper: Models.IExperienceWrapper = new Models.ExperienceWrapper(
            data
          );
          await experienceWrapper.save();
          return experienceWrapper._id;
        } catch (e) {
          return;
        }
      }
    )
  );

  experienceWrapperIdsArray = experienceWrapperIdsArray.filter(
    (element) => element != null && element != undefined
  );

  return experienceWrapperIdsArray;
};
export default generateExperienceWrapper;
