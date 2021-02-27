import { Schema } from 'mongoose';

export interface ISkillInterest {
  skillName: string;
  progress: number;
  hoursSpent: number;
}

export const SkillInterest = new Schema({
  skillName: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
  hoursSpent: {
    type: Number,
    required: true,
  },
});
