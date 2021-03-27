/*  
When a USER starts and experience, a document of this model is creates. 
When a USER finishes an experience, an enddate is added. Users currently in the experience will not have an enddate. 
**/

import mongoose, { Document, model, ObjectId, Schema } from 'mongoose';

export interface IExperienceUsers extends Document {
  experience: ObjectId[];
  user: ObjectId[];
  startDate: Date;
  endDate: Date;
}

const ExperienceUserSchema = new Schema({
  experience: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Experience',
    required: true,
  },
  user: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    required: true,
  },
  startDate: {
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
});

export default mongoose.models.ExperienceUsers ||
  model<IExperienceUsers>('ExperienceUsers', ExperienceUserSchema);
