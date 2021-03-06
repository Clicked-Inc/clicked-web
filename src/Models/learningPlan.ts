import { Document, model, Schema } from 'mongoose';

enum TierType {
  SelfDiscovery = 'self discovery',
  Pathfinder = 'pathfinder',
  FirstStep = 'first step',
  Launch = 'launch',
}

// TODO: Waiting on Experience schema
export interface ILearningPlan extends Document {
  skillName: string;
  tier: TierType;
  // completedExperiences: Experience[];
  // currentExperiences: Experience[];
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
  // completedExperiences: {
  //   type: [Experience],
  //   required: true,
  // },
  // currentExperiences: {
  //   type: [Experience],
  //   required: true,
  // },
});

export default model<ILearningPlan>('LearningPlan', LearningPlanSchema);
