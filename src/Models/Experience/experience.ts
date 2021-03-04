import { Document, model, Schema } from 'mongoose';
import { IUser, User } from '..';
import ExperienceUsers, { IExperienceUsers } from './experienceUsers';
import SkillScore, { ISkillScore } from './skillScore';


// Add Validation
enum CategoryType {
    Audio = 'audio', 
    Video = 'video',
    Articles = 'articles', 
    Projects  = 'projects',
  }
  
  enum ExperienceType {
    Solo = 'solo', 
    Group = 'group', 
    Passive = 'passive', 
    Live = 'live',
  }
  
  export interface IExperience extends Document {
    name: string;
    category: CategoryType;
    experienceType: ExperienceType;
    coach: IUser, 
    learningPlan: string; //TO CHANGE: Reference to learning plans? 
    targetSkill: ISkillScore[];
    // TODO: Add feedback Schema 
    averageRating: number, 
    currentUsers: IExperienceUsers,
    previousUsers: IExperienceUsers,
  }


  const ExpereienceSchema= new Schema({
    name: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        enum: Object.values(CategoryType),
        required: true,
      },
      experienceType: {
        type: String,
        enum: Object.values(ExperienceType),
        required: true,
      },
      coach: {
          type: User, 
          required: true, 
          validate: [coachValidator, 'This user is not a coach']
      }, 
      learningPlan: { //TODO: Change this
        type: String,
        required: true,
      },
      targetSkill: {
        type: [SkillScore],
        required: true,
      },
      averageRating: { //TODO: automatically calculate this, when feedback schema set up
          type: Number, 
          required: true
      },
        currentUsers: {
        type: [ExperienceUsers],
        required: true,
      },
      previousUsers: {
        type: [ExperienceUsers],
        required: true,
      },

  });

  function coachValidator(value: IUser): boolean {
    return value.role == 'coach';
  }

  export default model<IExperience>('Experience', ExpereienceSchema);
