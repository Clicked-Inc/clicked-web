/*  
When a USER starts and experience, a document of this model is creates. 
When a USER finished an experience, their document of the experience is edited to include
their end date and change the userType to 'previous'. 
**/

import mongoose, { Document, model, ObjectId, Schema } from 'mongoose';

enum DateRangeType {
  Start = 'start',
  End = 'end',
}

enum UserType {
  Current = 'current',
  Previous = 'previous',
}

export interface IExperienceUsers extends Document {
  experience: ObjectId[];
  user: ObjectId[];
  dateType: DateRangeType;
  userType: UserType;
  date: Date;
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
  dateType: {
    type: String,
    enum: Object.values(DateRangeType),
    required: true,
  },
  userType: {
    type: String,
    enum: Object.values(UserType),
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export default mongoose.models.ExperienceUsers ||
  model<IExperienceUsers>('ExperienceUsers', ExperienceUserSchema);
