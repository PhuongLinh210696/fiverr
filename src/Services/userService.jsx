import { https } from "./config";

export const userService = {
  getUser: (id) => {
    return https.get("api/users");
  },
  addUser: (data) => {
    return https.post("api/users", data)
  },
  deleteUser: (id) => {
    return https.delete(`api/users/${id}`);
  },
  getUserPage: (id) => {
    return https.get("api/user/phan-trang-tim-kiem")
  },
  getUserById: (id) => {
    return https.get(`api/users/${id}`);
  },
  addUserById: (id) => {
    return https.put(`api/users/${id}`);
  },
  getUserSearch: (id) => {
    return https.get(`api/users/search/${id}`);
  },
};