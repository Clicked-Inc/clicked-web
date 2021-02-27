import { Document, model, Schema } from 'mongoose';
import { IGeoPoint, GeoPoint } from './geopoint';
import { ISkillInterest, SkillInterest } from './skillInterest';
import { IEducation, Education } from './education';
import { IExternalExperience, ExternalExperience } from './externalExperience';

enum AspirationType {
  Explore,
  Dive,
}

// user interface
export interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  profilePic: string;
  location: IGeoPoint[];
  education: IEducation;
  aspirationType: AspirationType;
  externalExperiences: IExternalExperience[];
  skillInterests: ISkillInterest[];
  points: number;
}

// Schema
const UserSchema = new Schema({
  email: {
    type: String,
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
    type: [GeoPoint],
    required: false,
  },
  education: {
    type: Education,
    required: false,
  },
  aspirationType: {
    type: AspirationType,
    default: AspirationType.Explore,
  },
  externalExperiences: {
    type: [ExternalExperience],
    required: false,
  },
  skillInterests: {
    type: [SkillInterest],
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
});

export default model<IUser>('User', UserSchema);
