import { Document, model, Schema } from 'mongoose';

export interface IGeoPoint extends Document {
  coordinates: number[];
}

const GeoPointSchema = new Schema({
  coordinates: {
    type: [Number],
    required: true,
  },
});

export default model<IGeoPoint>('GeoPoint', GeoPointSchema);
