import { Schema } from 'mongoose';

enum DegreeType {
  HighSchool,
  Bachelors,
  Masters,
  Doctorate,
}

export interface IEducation {
  schoolName: string;
  major: string;
  graduatingYear: number;
  degreeType: DegreeType;
}

export const Education = new Schema({
  schoolName: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  graduatingYear: {
    type: Number,
    required: false,
  },
  degreeType: {
    type: DegreeType,
    required: true,
  },
});
