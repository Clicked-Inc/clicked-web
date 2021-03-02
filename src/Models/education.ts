import { Document, model, Schema } from 'mongoose';

enum DegreeType {
  HighSchool = 0,
  Bachelors = 1,
  Masters = 2,
  Doctorate = 3,
}

export interface IEducation extends Document {
  schoolName: string;
  major: string;
  graduatingYear: number;
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
    type: Number,
    enum: Object.values(DegreeType),
    required: true,
  },
});

export default model<IEducation>('Education', EducationSchema);
