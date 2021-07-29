import api from './api';

// const UserService = {
//   login: async (params) => {
//     await Api.post('/auth/user/sign_in', params, { headers: { 'Content-Type': 'application/json' } })
//   },
//   register: async (params) => await Api.post('/auth/user', params, { headers: { 'Content-Type': 'application/json' } })
// }




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
  signIn: ( { email, password }) => 
    api.post('auth/user/sign_in', {
      email,
      password
    }),
}



export default UsersService;

