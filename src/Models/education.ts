import { Document, model, Schema } from 'mongoose';

enum DegreeType {
  HighSchool = 'highSchool',
  Bachelors = 'bachelors',
  Masters = 'masters',
  Doctorate = 'doctorate',
}

export interface IEducation extends Document {
  schoolName: string;
  major: string;
  graduatingYear?: number;
  degreeType: DegreeType;
}

const EducationSchema = new Schema({
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
    type: String,
    enum: Object.values(DegreeType),
    required: true,
  },
});

export default model<IEducation>('Education', EducationSchema);
