import api from './api';

const UsersService = {
  signUp: ({
    name,
    email,
    password,
    password_confirmation
  }) =>
    api.post('/auth/user', {
      name,
      email,
      password,
      password_confirmation
    }),
  signIn: ({ email, password }) =>
    api.post('auth/user/sign_in', {
      email,
      password
    }),
}

export default UsersService;
