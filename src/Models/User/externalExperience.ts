import mongoose, { Document, model, Schema } from 'mongoose';

enum ExternalExperienceType {
  Course = 'course',
  Career = 'career',
}

export interface IExternalExperience extends Document {
  name: string;
  organization: string;
  description?: string;
  link: string;
  startDate?: Date;
  completeDate: Date;
  backgroundType: ExternalExperienceType;
  credentialId?: string;
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
  startDate: {
    type: Date,
    required: false,
  },
  completeDate: {
    type: Date,
    required: true,
  },
  backgroundType: {
    type: String,
    enum: Object.values(ExternalExperienceType),
    required: true,
  },
  credentialId: {
    type: String,
    required: false,
  },
});

export default mongoose.models.ExternalExperience ||
  model<IExternalExperience>('ExternalExperience', ExternalExperienceSchema);
