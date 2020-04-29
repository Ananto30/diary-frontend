import axios from "axios";
import commonStore from "./store/commonStore.js";

const api = axios.create({
  baseURL: "http://192.168.0.106:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const getHeader = () => {
  return {
    headers: {
      Authorization: "Bearer " + commonStore.authToken,
    },
  };
};

const Auth = {
  login: (email, password) =>
    api.post(
      "/auth/login",
      {
        email: email,
        password: password,
      },
      getHeader()
    ),
};

const User = {
  getUsers: () => api.get("user/", getHeader()),
  getById: (id) => api.get(`user/${id}`, getHeader()),
};

export default {
  Auth,
  User,
};
