import { Schema } from 'mongoose';

export interface IGeoPoint {
  coordinates: number[];
}

export const GeoPoint = new Schema({
  coordinates: {
    type: [Number],
    required: true,
  },
});
