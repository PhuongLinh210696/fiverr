import { https } from "./config";

export const dowService = {
  getDow: () => {
    return https.post("api/chi-tiet-loai-cong-viec");
  },
  addDow: (data) => {
    return https.post("api/chi-tiet-loai-cong-viec", data);
  },
  getDowpage: () => {
    return https.get("api/chi-tiet-loai-cong-viec/phan-trang-tim-kiem");
  },
  getDowId: (id) => {
    return https.get(`api/chi-tiet-loai-cong-viec/${id}`);
  },
  addtDowId: (id, data) => {
    return https.get(`api/chi-tiet-loai-cong-viec/${id}`, data);
  },
  deleteDowId: (id) => {
    return https.get(`api/chi-tiet-loai-cong-viec/${id}`);
  },
  addDowGd: (data) => {
    return https.get("api/chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai", data);
  },
  addDowGd: (id, data) => {
    return https.get(`api/chi-tiet-loai-cong-viec/upload-hinh-nhom-loai-cong-viec/${id}`, data);
  },
  editDowGd: (id, data) => {
    return https.get(`api/chi-tiet-loai-cong-viec/sua-nhom-chi-tiet-loai/${id}`, data);
  },
};