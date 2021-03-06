import Experience, { IExperience } from '@Models/ExperienceFolder/experience';
import { Document, model, Schema } from 'mongoose';
import { IUser, User } from '..';


enum FeedbackType {
    Private = 'private',
    Public = 'public'
  }

export interface IFeedback extends Document {
    user: IUser;
    coach: IUser; 
    experience: IExperience;
    privacy: FeedbackType;
    feedbackText: string; 
    enjoyabilityRating: number;
    difficultyRating: number;
    completed: boolean; 
    personalizedMessage: string
  }

  const FeedbackSchema = new Schema({
    user: {
      type: User,
      required: true,
    },
    coach: {
      type: User,
      required: true,
    },
    experience: {
      type: Experience, 
      required: true
    },
    privacy: {
      type: String,
      enum: Object.values(FeedbackType),
      required: true,
    },
    feedbackText: {
      type: String, 
      required: false
    },
    enjoyabilityRating: {
      type: Number, 
      required: false
    },
    difficultyRating: {
      type: Number, 
      required: false
    },
    completed: {
      type: Boolean, 
      required: true
    }, 
    personalizedMessage: {
      type: String, 
      required: false
    }
  });
  
  export default model<IFeedback>('Feedback', FeedbackSchema);