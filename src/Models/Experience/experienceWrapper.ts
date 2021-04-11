/*  
When a USER starts and experience, a document of this model is creates. 
When a USER finishes an experience, an enddate is added. Users currently in the experience will not have an enddate. 
**/

import mongoose, { Document, model, ObjectId, Schema } from 'mongoose';
import * as Models from '@Models/index';

export interface IExperienceWrapper extends Document {
  experience: ObjectId | Models.IExperience;
  user: ObjectId | Models.IUser;
  startDate: Date;
  endDate?: Date;
  feedbackGiven?: ObjectId | Models.IFeedback;
  notesTaken?: string;
}

const ExperienceWrapperSchema = new Schema({
  experience: {
    type: Schema.Types.ObjectId,
    ref: 'Experience',
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: false,
  },
  feedbackGiven: {
    type: Schema.Types.ObjectId,
    ref: 'Feedback',
    required: false,
  },
  notesTaken: {
    type: String,
    required: false,
  },
});

ExperienceWrapperSchema.index({ experience: 1, user: 1 }, { unique: true });

export default mongoose.models.ExperienceWrapper ||
  model<IExperienceWrapper>('ExperienceWrapper', ExperienceWrapperSchema);
