import * as Models from '@Models/index';

const validateUniqueUser = async (
  email: string,
  username: string
): Promise<boolean[]> => {
  const emailExists: boolean = await Models.User.exists({ email });
  const usernameExists: boolean = await Models.User.exists({
    username,
  });
  return [!emailExists, !usernameExists];
};
export default validateUniqueUser;
