import * as Models from '@Models/index';

const generateGeoPoint = (coordinates: number[]): Models.IGeoPoint => {
  const geoPoint: Models.IGeoPoint = new Models.GeoPoint({ coordinates });
  console.log(geoPoint);
  return geoPoint;
};
export default generateGeoPoint;
