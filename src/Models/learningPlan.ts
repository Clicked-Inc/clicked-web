import { Document, model, Schema } from 'mongoose';
import Experience, { IExperience } from './ExperienceFolder/experience';

enum TierType {
  SelfDiscovery = 'selfDiscovery',
  Pathfinder = 'pathfinder',
  FirstStep = 'firstStep',
  Launch = 'launch',
}

export interface ILearningPlan extends Document {
  skillName: string;
  tier: TierType;
  completedExperiences: IExperience[];
  currentExperiences: IExperience[];
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
    type: [Experience.schema],
    required: true,
  },
  currentExperiences: {
    type: [Experience.schema],
    required: true,
  },
});

export default model<ILearningPlan>('LearningPlan', LearningPlanSchema);
