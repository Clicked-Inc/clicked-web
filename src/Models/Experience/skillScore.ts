import mongoose, { Document, model, Schema } from 'mongoose';

export interface ISkillScore extends Document {
  skillName: string;
  progress: number;
}

export const SkillScoreSchema = new Schema({
  skillName: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: false,
    default: 0,
  },
});

export default mongoose.models.SkillScore ||
  model<ISkillScore>('SkillScore', SkillScoreSchema);
