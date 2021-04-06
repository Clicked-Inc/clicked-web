import * as Models from '@Models/index';

const generateGeoPoint = async (
  coordinates: number[]
): Promise<Models.IGeoPoint> => {
  const geoPoint: Models.IGeoPoint = new Models.GeoPoint({ coordinates });
  await geoPoint.save();
  return geoPoint;
};
export default generateGeoPoint;
