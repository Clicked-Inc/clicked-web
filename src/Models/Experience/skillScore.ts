import mongoose, { Document, model, Schema } from 'mongoose';

export interface ISkillScore extends Document {
  skillName: string;
  score: number;
}

export const SkillScoreSchema = new Schema({
  skillName: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.SkillScore ||
  model<ISkillScore>('SkillScore', SkillScoreSchema);
