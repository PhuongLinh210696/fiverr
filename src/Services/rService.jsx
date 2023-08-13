import { https } from "./config";

export const rService = {
  getR: () => {
    return https.post("api/binh-luan");
  },
  addR: (data) => {
    return https.post("/api/binh-luan", data);
  },
  getRId: (id) => {
    return https.put(`api/binh-luan/${id}`);
  },
  deleteRId: (id) => {
    return https.delete(`api/binh-luan/${id}`);
  },
  getRByWId: (id) => {
    return https.get(`api/binh-luan/lay-binh-luan-theo-cong-viec/${id}`);
  },
};