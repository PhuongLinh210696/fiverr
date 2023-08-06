import { https } from "./config";

export const userService = {
  getUsers: () => {
    return https.get("api/users");
  },
  getUsersById: (id) => {
    return https.get(`api/users/${id}`);
  },
  addUsers: (data) => {
    return https.post("api/users", data);
  },
  updateUsers: (data,id) => { 
    return https.put(`api/users/${id}`,data);
   },
  searchUsers: (nameUser) => {
    return https.get(`api/users/search/${nameUser}`);
  },
  deleteUsersId: (id) => {
    return https.delete(`api/users?id=${id}`);
  },
  uploadAvartar: (data) =>{
    return https.post("api/users/upload-avatar",data);
  }
};