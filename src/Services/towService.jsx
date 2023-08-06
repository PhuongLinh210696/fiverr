import { https } from "./config";

export const towService = {
  getToW: () => {
    return https.get("api/loai-cong-viec");
  },
  getTowById: (id) => {
    return https.get(`api/loai-cong-viec/${id}`)
  },
  addTow: (data) => {
    return https.post("api/loai-cong-viec", data)
  },
  updateTow: (data,id) => { 
    return https.put(`api/loai-cong-viec/${id}`,data)
   },
  searchTow: (data) => {
    return https.get("api/loai-cong-viec/phan-trang-tim-kiem", data);
  },
  deleteTowId: (id) => {
    return https.delete(`api/loai-cong-viec/${id}`);
  }
};