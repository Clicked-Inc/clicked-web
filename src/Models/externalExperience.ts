import { Schema } from 'mongoose';

enum ExternalExperienceType {
  Course,
  Career,
}

export interface IExternalExperience {
  courseName: string;
  courseDescription: string;
  courseLink: string;
  dateStarted: Date;
  dateCompleted: Date;
  backgroundType: ExternalExperienceType;
}

export const ExternalExperience = new Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
    required: false,
  },
  courseLink: {
    type: String,
    required: true,
  },
  dateStarted: {
    type: Date,
    required: false,
  },
  dateCompleted: {
    type: Date,
    required: true,
  },
  backgroundType: {
    type: ExternalExperienceType,
    required: true,
  },
});