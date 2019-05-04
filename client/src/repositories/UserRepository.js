import Repository from "./Repository";

const resource = "/auth";
export default {
  get() {
    return Repository.get(`${resource}`);
  },

  getPost(postId) {
    return Repository.get(`${resource}/${postId}`);
  },

  createUser(payload) {
    return Repository.post(`${resource}/signup`, payload);
  }
};
