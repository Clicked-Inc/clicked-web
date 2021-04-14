/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  endpoint,
  request,
  response,
  body,
  queryParams,
  String,
  Number,
} from '@airtasker/spot';
@endpoint({
  method: 'POST',
  path: '/api/user/[id]/endexp',
})
class EndExp {
  @request
  request(
    @queryParams
    queryParams: {
      id: String;
    },
    @body body: EndExpRequest
  ) {}

  @response({ status: 200 })
  successfulResponse(@body body: SuccessfulResponse) {}

  @response({ status: 421 })
  incorrectRequestResponse(@body body: IncorrectRequestResponse) {}

  @response({ status: 409 })
  userCollisionResponse(@body body: UserCollisionResponse) {}

  @response({ status: 400 })
  databaseErrorResponse(@body body: DatabaseErrorResponse) {}
}

interface EndExpRequest {
  experience: String;
}

interface SuccessfulResponse {
  success: true;
  data: IUser;
}

interface IncorrectRequestResponse {
  message: 'Incorrect request type.';
}

interface UserCollisionResponse {
  message: 'Email already taken.' | 'Username already taken.';
}

interface DatabaseErrorResponse {
  message: 'Registration failed.';
}

// interface IExperienceWrapper {
//   experience: ObjectId | Models.IExperience;
//   user: ObjectId | Models.IUser;
//   startDate: Date;
//   endDate?: Date;
//   feedbackGiven?: ObjectId | Models.IFeedback;
//   notesTaken?: string;
// }
