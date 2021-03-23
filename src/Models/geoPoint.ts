import mongoose, { Document, model, Schema } from 'mongoose';

export interface IGeoPoint extends Document {
  coordinates: number[];
}

const GeoPointSchema = new Schema({
  coordinates: {
    type: [Number],
    required: true,
  },
});

export default mongoose.models.GeoPoint ||
  model<IGeoPoint>('GeoPoint', GeoPointSchema);
