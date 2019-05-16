import Repository from "./Repository";

const resource = "/auth";
export default {
  signUp(payload) {
    return Repository.post(`${resource}/signup`, payload);
  },
  login(payload) {
    return Repository.post(`${resource}/login`, payload);
  }
};
