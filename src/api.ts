import {
  api,
  body,
  endpoint,
  request,
  response,
  String,
} from '@airtasker/spot';

@api({ name: 'my-api' })
class Api {}

@endpoint({
  method: 'POST',
  path: '/users',
})
class CreateUser {
  @request
  request(@body body: CreateUserRequest) {}

  @response({ status: 201 })
  successfulResponse(@body body: CreateUserResponse) {}
}

interface CreateUserRequest {
  firstName: string;
  lastName: string;
}

interface CreateUserResponse {
  firstName: string;
  lastName: string;
  role: string;
}
