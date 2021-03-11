import mongoose, { Document, model, ObjectId, Schema } from 'mongoose';
import Feedback, { IFeedback } from '../Feedback/feedback';
import { IUser } from '../user';
import ExperienceUsers, { IExperienceUsers } from './experienceUsers';
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
  feedback: IFeedback[]; //TODO: Change this to a reference to objectID instead?
  averageRating?: number;
  currentUsers: IExperienceUsers;
  previousUsers: IExperienceUsers;
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
    validate: [coachValidator, 'This user is not a coach'],
  },
  targetSkill: {
    type: [SkillScore.schema],
    required: true,
  },
  feedback: {
    type: [Feedback.schema],
    required: false,
  },
  averageRating: {
    //TODO: automatically calculate this, when feedback schema set up
    type: Number,
    required: false, //Not Required if has not been completed before
  },
  currentUsers: {
    type: [ExperienceUsers.schema],
    required: true,
  },
  previousUsers: {
    type: [ExperienceUsers.schema],
    required: true,
  },
});

function coachValidator(value: IUser): boolean {
  return value.role == 'coach';
}

export default model<IExperience>('Experience', ExperienceSchema);
