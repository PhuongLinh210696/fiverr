import { https } from "./config";

export const wService = {
  getW: () => {
    return https.get("api/cong-viec");
  },
  addW: (data) => {
    return https.post("api/cong-viec", data);
  },
  getWSearch: () => {
    return https.get("api/cong-viec/phan-trang-tim-kiem");
  },
  getWById: (id) => {
    return https.get(`api/cong-viec/${id}`);
  },
  addWId: (data, id) => {
    return https.put(`api/cong-viec/${id}`, data);
  },
  deleteWId: (id) => {
    return https.delete(`api/cong-viec/${id}`);
  },
  addWImgById: (data, id) => {
    return https.post(`api/cong-viec/upload-hinh-cong-viec/${id}`, data);
  },
  getWMenu: () => {
    return https.get("api/cong-viec/lay-menu-loai-cong-viec");
  },
  getWMenuByWId: (id) => {
    return https.get(`api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
  },
  getWMenuByWDetail: (id) => {
    return https.get(`api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`);
  },
  getWMenuDById: (maCV) => {
    return https.get(`api/cong-viec/lay-cong-viec-chi-tiet/${maCV}`);
  },
  getWMenuLByName: (name) => {
    return https.get(`api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${name}`);
  },
};