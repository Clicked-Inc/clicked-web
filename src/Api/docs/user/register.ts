/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  endpoint,
  request,
  response,
  body,
  String,
  Number,
} from '@airtasker/spot';
@endpoint({
  method: 'POST',
  path: '/api/user/register',
})
class Register {
  @request
  request(@body body: RegisterUserRequest) {}

  @response({ status: 200 })
  successfulResponse(@body body: SuccessfulRegisterResponse) {}

  @response({ status: 421 })
  incorrectRequestResponse(@body body: IncorrectRegisterRequestResponse) {}

  @response({ status: 409 })
  userCollisionResponse(@body body: UserCollisionResponse) {}

  @response({ status: 400 })
  databaseErrorResponse(@body body: RegisterDatabaseErrorResponse) {}
}

interface RegisterUserRequest {
  email: String;
  username: String;
  role: 'student' | 'admin' | 'coach';
  password: String;
  firstName: String;
  lastName: String;
  aspirationType: 'explore' | 'dive';
  skillInterests: String[];
}

interface SuccessfulRegisterResponse {
  message: 'Registration successful.';
  user: IUser;
}

interface IncorrectRegisterRequestResponse {
  message: 'Incorrect request type.';
}

interface UserCollisionResponse {
  message: 'Email already taken.' | 'Username already taken.';
}

interface RegisterDatabaseErrorResponse {
  message: 'Registration failed.';
}

export interface IUser {
  age?: Number;
  email: String;
  username: String;
  role: 'student' | 'admin' | 'coach';
  password: String;
  firstName: String;
  lastName: String;
  profilePic?: String;
}
