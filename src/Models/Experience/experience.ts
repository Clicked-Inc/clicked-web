import * as Models from '@Internal/Models/index';
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
  targetSkill: ObjectId[] | Models.ISkillScore[];
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
    type: [Schema.Types.ObjectId],
    ref: 'SkillScore',
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isExperience = (obj: IExperience | any): obj is IExperience => {
  return obj && obj.name && typeof obj.name === 'string';
};

export default mongoose.models.Experience ||
  model<IExperience>('Experience', ExperienceSchema);
