import mongoose, { Document, model, ObjectId, Schema } from 'mongoose';
import SkillScore, { ISkillScore } from './skillScore';

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
  coach: ObjectId;
  targetSkill: ISkillScore[];
  feedback?: ObjectId;
  averageRating?: number;
  currentUsers?: ObjectId[];
  previousUsers?: ObjectId[];
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  targetSkill: {
    type: [SkillScore.schema],
    required: true,
  },
  feedback: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feedback',
    required: false,
  },
  averageRating: {
    type: Number,
    required: false,
  },
  currentUsers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'ExperienceUsers',
    required: false,
  },
  previousUsers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'ExperienceUsers',
    required: false,
  },
});

export default mongoose.models.Experience ||
  model<IExperience>('Experience', ExperienceSchema);
