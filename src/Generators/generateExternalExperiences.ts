import * as Models from '@Internal/Models/index';
import { ObjectId } from 'mongoose';

const generateExternalExperiences = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
