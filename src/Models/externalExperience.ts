import { Document, model, Schema } from 'mongoose';

enum ExternalExperienceType {
  Course = 0,
  Career = 1,
}

export interface IExternalExperience extends Document {
  name: string;
  organization: string;
  description: string;
  link: string;
  dateStarted: Date;
  dateCompleted: Date;
  backgroundType: ExternalExperienceType;
  credentialId: string;
}

export const ExternalExperienceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: true,
  },
  dateStarted: {
    type: Date,
    required: false,
  },
  dateCompleted: {
    type: Date,
    required: true,
  },
  backgroundType: {
    type: Number,
    enum: Object.values(ExternalExperienceType),
    required: true,
  },
  credentialId: {
    type: String,
    required: false,
  },
});

export default model<IExternalExperience>(
  'ExternalExperience',
  ExternalExperienceSchema
);
