import mongoose, { Document, model, ObjectId, Schema } from 'mongoose';

enum FeedbackType {
  Private = 'private',
  Public = 'public',
}

export interface IFeedback extends Document {
  user: ObjectId;
  coach: ObjectId;
  experience: ObjectId;
  privacy: FeedbackType;
  feedbackText: string;
  enjoyabilityRating?: number;
  difficultyRating?: number;
  completed: boolean;
  personalizedMessage?: string;
}

const FeedbackSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  experience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Experience',
    required: true,
  },
  privacy: {
    type: String,
    enum: Object.values(FeedbackType),
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

export default mongoose.models.SkillInterest ||
  model<IFeedback>('Feedback', FeedbackSchema);
