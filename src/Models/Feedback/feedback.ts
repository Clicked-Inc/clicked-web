import mongoose, { Document, model, ObjectId, Schema } from 'mongoose';
import * as Models from '@Models/index';
enum PrivacyType {
  Private = 'private',
  Public = 'public',
}

export interface IFeedback extends Document {
  user: ObjectId | Models.IUser;
  coach: ObjectId | Models.IUser;
  experience: ObjectId | Models.IExperience;
  privacy: PrivacyType;
  feedbackText: string;
  enjoyabilityRating?: number;
  difficultyRating?: number;
  completed: boolean;
  personalizedMessage?: string;
  skillRatings?: ObjectId[] | Models.ISkillScore[];
}

const FeedbackSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  coach: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  experience: {
    type: Schema.Types.ObjectId,
    ref: 'Experience',
    required: true,
  },
  privacy: {
    type: String,
    enum: Object.values(PrivacyType),
    required: true,
  },
  feedbackText: {
    type: String,
    required: false,
  },
  enjoyabilityRating: {
    type: Number,
    required: false,
  },
  difficultyRating: {
    type: Number,
    required: false,
  },
  skillRatings: {
    type: [Schema.Types.ObjectId],
    ref: 'SkillScore',
    required: false,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  personalizedMessage: {
    type: String,
    required: false,
  },
});

export default mongoose.models.Feedback ||
  model<IFeedback>('Feedback', FeedbackSchema);
