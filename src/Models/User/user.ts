import mongoose, { Document, model, Schema, ObjectId } from 'mongoose';
import GeoPoint, { IGeoPoint } from './geoPoint';
import * as Models from '@Internal/Models/index';

enum AspirationType {
  Explore = 'explore',
  Dive = 'dive',
}

enum UserType {
  Student = 'student',
  Coach = 'coach',
  Admin = 'admin',
}

enum CareerDevelopmentType {
  Option1 = 'Select career development stage',
  Option2 = 'Just starting my journey',
  Option3 = 'Exploring new skills and career options',
  Option4 = 'Building my skills for a specific career',
  Option5 = 'Early career professional perfecting my skills',
  Option6 = 'Experience professional coaching others',
}

export interface IUser extends Document {
  age?: number;
  email: string;
  username: string;
  role: UserType;
  password: string;
  firstName: string;
  lastName: string;
  profilePic?: string;
  location?: IGeoPoint;
  education?: ObjectId[] | Models.IEducation[];
  aspirationType: AspirationType;
  externalExperiences?: ObjectId[] | Models.IExternalExperience[];
  skillInterests: ObjectId[] | Models.ISkillInterest[];
  points?: number;
  learningPlan?: ObjectId | Models.ILearningPlan;
  completedExperiences?: ObjectId[] | Models.IExperienceWrapper[];
  currentExperiences?: ObjectId[] | Models.IExperienceWrapper[];
  bio: string;
  careerDevelopmentType: string;
}

const UserSchema = new Schema({
  age: {
    type: Number,
    required: false,
  },
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
    required: true,
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
    type: GeoPoint.schema,
    required: false,
  },
  education: {
    type: [Schema.Types.ObjectId],
    ref: 'Education',
    required: false,
  },
  aspirationType: {
    type: String,
    enum: Object.values(AspirationType),
    required: true,
  },
  externalExperiences: {
    type: [Schema.Types.ObjectId],
    ref: 'ExternalExperience',
    required: false,
  },
  skillInterests: {
    type: [Schema.Types.ObjectId],
    ref: 'SkillInterest',
    required: true,
  },
  points: {
    type: Number,
    default: 0,
    required: false,
  },
  learningPlan: {
    type: Schema.Types.ObjectId,
    ref: 'LearningPlan',
    required: false,
  },
  completedExperiences: {
    type: [Schema.Types.ObjectId],
    ref: 'ExperienceWrapper',
    required: false,
  },
  currentExperiences: {
    type: [Schema.Types.ObjectId],
    ref: 'ExperienceWrapper',
    required: false,
  },
  bio: {
    type: String,
    required: true,
  },
  careerDevelopmentType: {
    type: String,
    enum: Object.values(CareerDevelopmentType),
    required: true,
  },
});

export default mongoose.models.User || model<IUser>('User', UserSchema);
