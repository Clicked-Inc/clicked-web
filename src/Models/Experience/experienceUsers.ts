/*  
When a USER starts an experience, a document of this model is created. 
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
  feedbackGiven?: ObjectId;
  notesTaken?: string;
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
  feedbackGiven: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feedback',
    required: false,
  },
  notesTaken: {
    type: String,
    required: false,
  }
});

export default mongoose.models.ExperienceUsers ||
  model<IExperienceUsers>('ExperienceUsers', ExperienceUserSchema);
