export const userLogin = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@test.com' && password === 'hi') {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
};
