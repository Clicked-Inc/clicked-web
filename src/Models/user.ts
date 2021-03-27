import mongoose, { Document, model, Schema, ObjectId } from 'mongoose';
import GeoPoint, { IGeoPoint } from './geoPoint';
import SkillInterest, { ISkillInterest } from './skillInterest';
import Education, { IEducation } from './education';
import ExternalExperience, { IExternalExperience } from './externalExperience';
import ExperienceUsers, { IExperienceUsers } from '@Models/Experience/experienceUsers';

// TODO: add more aspiration types
enum AspirationType {
  Explore = 'explore',
  Dive = 'dive',
}

enum UserType {
  Student = 'student',
  Coach = 'coach',
  Admin = 'admin',
}

export interface IUser extends Document {
  email: string;
  username: string;
  role: UserType;
  password: string;
  firstName: string;
  lastName: string;
  profilePic?: string;
  location?: IGeoPoint[];
  education?: ObjectId[];
  aspirationType: AspirationType;
  externalExperiences?: ObjectId[];
  skillInterests: ObjectId[];
  points?: number;
  allExperiences: ObjectId[];
}

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(UserType),
    required: true,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: false,
  },
  location: {
    type: [GeoPoint.schema],
    required: false,
  },
  education: {
    type: [mongoose.schema.Types.ObjectId],
    ref: 'Education',
    required: false,
  },
  aspirationType: {
    type: String,
    enum: Object.values(AspirationType),
    required: true,
  },
  externalExperiences: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'ExternalExperience',
    required: false,
  },
  skillInterests: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'SkillInterest',
    required: true,
  },
  points: {
    type: Number,
    default: 0,
    required: false,
  },
  allExperiences: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'ExperienceUsers',
    required: false,
  },
  learningPlan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LearningPlan',
    required: false,
  }
});

export default mongoose.models.User || model<IUser>('User', UserSchema);
