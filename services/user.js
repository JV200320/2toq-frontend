import Api from './api';

const UserService = {
  login: async (params) => {
    await Api.post('/auth/user/sign_in', params, { headers: { 'Content-Type': 'application/json' } })
  },
  register: async (params) => await Api.post('/auth/user', params, { headers: { 'Content-Type': 'application/json' } })
}

export default UserService;