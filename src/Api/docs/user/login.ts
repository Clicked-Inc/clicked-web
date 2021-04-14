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
  path: '/api/user/login',
})
class Login {
  @request
  request(@body body: LoginUserRequest) {}

  @response({ status: 200 })
  successfulResponse(@body body: SuccessfulLoginResponse) {}

  @response({ status: 421 })
  incorrectRequestResponse(@body body: IncorrectLoginRequestResponse) {}

  @response({ status: 401 })
  incorrectPasswordResponse(@body body: IncorrectPasswordResponse) {}

  @response({ status: 400 })
  generalErrorResponse(@body body: GeneralErrorResponse) {}
}

interface LoginUserRequest {
  email?: String;
  username?: String;
  password: String;
}

interface SuccessfulLoginResponse {
  message: 'success';
  authToken: String;
}

interface IncorrectLoginRequestResponse {
  message: 'Incorrect request type.';
}

interface IncorrectPasswordResponse {
  message: 'Incorrect Password!';
}

interface GeneralErrorResponse {
  message:
    | 'Registration failed'
    | 'Login requires a password'
    | 'Login requires an email/username';
}
