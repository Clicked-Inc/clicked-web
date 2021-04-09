import * as Models from '@Models/index';
import mongoose, { Document, model, ObjectId, Schema } from 'mongoose';
// Add Validation
enum CategoryType {
  Audio = 'audio',
  Video = 'video',
  Articles = 'articles',
  Projects = 'projects',
}

enum ExperienceType {
  Solo = 'solo',
  Group = 'group',
  Passive = 'passive',
  Live = 'live',
}

export interface IExperience extends Document {
  name: string;
  category: CategoryType;
  experienceType: ExperienceType;
  coach: ObjectId | Models.IUser;
  targetSkill: Models.ISkillScore[];
  feedback?: ObjectId[] | Models.IFeedback[];
  averageRating?: number;
  currentUsers?: ObjectId[] | Models.IUser[];
  previousUsers?: ObjectId[] | Models.IUser[];
  points: number;
}
const ExperienceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: Object.values(CategoryType),
    required: true,
  },
  experienceType: {
    type: String,
    enum: Object.values(ExperienceType),
    required: true,
  },
  coach: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  targetSkill: {
    type: [Models.SkillScore.schema],
    required: true,
  },
  feedback: {
    type: [Schema.Types.ObjectId],
    ref: 'Feedback',
    required: false,
  },
  averageRating: {
    type: Number,
    required: false,
  },
  currentUsers: {
    type: [Schema.Types.ObjectId],
    ref: 'ExperienceWrapper',
    required: false,
  },
  previousUsers: {
    type: [Schema.Types.ObjectId],
    ref: 'ExperienceWrapper',
    required: false,
  },
  points: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Experience ||
  model<IExperience>('Experience', ExperienceSchema);
