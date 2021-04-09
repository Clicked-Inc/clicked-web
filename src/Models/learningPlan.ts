import { Document, model, ObjectId, Schema } from 'mongoose';
import Experience, { IExperience } from '@Models/Experience/experience';

enum TierType {
  SelfDiscovery = 'selfDiscovery',
  Pathfinder = 'pathfinder',
  FirstStep = 'firstStep',
  Launch = 'launch',
}

export interface ILearningPlan extends Document {
  skillName: string;
  tier: TierType;
  completedExperiences: ObjectId | IExperience[];
  currentExperiences: ObjectId | IExperience[];
}

const LearningPlanSchema = new Schema({
  skillName: {
    type: String,
    required: true,
  },
  tier: {
    type: String,
    enum: Object.values(TierType),
    required: true,
  },
  completedExperiences: {
    type: [Schema.Types.ObjectId],
    ref: 'Experience',
    required: true,
  },
  currentExperiences: {
    type: [Schema.Types.ObjectId],
    ref: 'Experience',
    required: true,
  },
});

export default model<ILearningPlan>('LearningPlan', LearningPlanSchema);
