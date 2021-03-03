import { Document, model, Schema } from 'mongoose';

export interface ISkillInterest extends Document {
  skillName: string;
  progress?: number;
  hoursSpent?: number;
}

export const SkillInterestSchema = new Schema({
  skillName: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    default: 0,
  },
  hoursSpent: {
    type: Number,
    default: 0,
  },
});

export default model<ISkillInterest>('SkillInterest', SkillInterestSchema);
