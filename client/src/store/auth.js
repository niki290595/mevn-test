export default {
  state: {
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      localStorage.setItem('token', token);
      state.status = 'success';
      state.token = token;
      state.user = user;
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = '';
      state.token = '';
    },
  },
  actions: {
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
}