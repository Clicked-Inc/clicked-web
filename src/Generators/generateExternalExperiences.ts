import * as Models from '@Models/index';
import { ObjectId } from 'mongoose';
const generateExternalExperiences = async (
  array: any[]
): Promise<ObjectId[]> => {
  let externalExperienceIdsArray: ObjectId[] = await Promise.all(
    array.map(
      async (data): Promise<ObjectId> => {
        try {
          const externalExperience: Models.IExternalExperience = new Models.ExternalExperience(
            data
          );
          await externalExperience.save();
          return externalExperience._id;
        } catch (e) {
          return;
        }
      }
    )
  );

  externalExperienceIdsArray = externalExperienceIdsArray.filter(
    (element) => element != null && element != undefined
  );

  return externalExperienceIdsArray;
};
export default generateExternalExperiences;
