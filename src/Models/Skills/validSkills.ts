import mongoose, { Document, model, Schema } from 'mongoose';

export interface IValidSkills extends Document {
  skillName: string;
}

export const ValidSkillsSchema = new Schema({
  skillName: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.models.ValidSkills ||
  model<IValidSkills>('ValidSkills', ValidSkillsSchema);
