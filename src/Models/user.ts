import mongoose, { Document, model, Schema } from 'mongoose';
import GeoPoint, { IGeoPoint } from './geoPoint';
import SkillInterest, { ISkillInterest } from './skillInterest';
import Education, { IEducation } from './education';
import ExternalExperience, { IExternalExperience } from './externalExperience';
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
  education?: IEducation[];
  aspirationType: AspirationType;
  externalExperiences?: IExternalExperience[];
  skillInterests: ISkillInterest[];
  points?: number;
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
    type: [Education.schema],
    required: false,
  },
  aspirationType: {
    type: String,
    enum: Object.values(AspirationType),
    required: true,
  },
  externalExperiences: {
    type: [ExternalExperience.schema],
    required: false,
  },
  skillInterests: {
    type: [SkillInterest.schema],
    required: true,
  },
  points: {
    type: Number,
    default: 0,
    required: false,
  },
});

export default mongoose.models.User || model<IUser>('User', UserSchema);
