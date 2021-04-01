/*  
When a USER starts and experience, a document of this model is creates. 
When a USER finishes an experience, an enddate is added. Users currently in the experience will not have an enddate. 
**/

import mongoose, { Document, model, ObjectId, Schema } from 'mongoose';

export interface IExperienceWrapper extends Document {
  experience: ObjectId;
  user: ObjectId;
  startDate: Date;
  endDate?: Date;
  feedbackGiven?: ObjectId;
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

export default mongoose.models.ExperienceWrapper ||
  model<IExperienceWrapper>('ExperienceWrapper', ExperienceWrapperSchema);