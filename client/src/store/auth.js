export default {
  state: {
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    login(state, token){
      localStorage.setItem('token', token);
      state.token = token;
    },
    logout(state){
      localStorage.removeItem('token');
      state.token = '';
    },
  },
  getters: {
    isLoggedIn: state => !!state.token,
    token: state => state.token
  }
}