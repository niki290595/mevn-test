import axios from "axios";

const baseDomain = "http://localhost:5000";
// The base URL is empty this time due we are using the jsonplaceholder API
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer `/* TODO: add token*/
  }
});
