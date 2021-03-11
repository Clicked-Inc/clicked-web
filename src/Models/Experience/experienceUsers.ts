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
  user: ObjectId[];
  dateType: DateRangeType;
  userType: UserType;
  date: Date;
}

const ExperienceUserSchema = new Schema({
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

export default model<IExperienceUsers>('ExperienceUsers', ExperienceUserSchema);
