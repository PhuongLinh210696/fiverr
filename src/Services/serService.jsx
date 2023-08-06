import { https } from "./config";

export const serService = {
    getService: () => {
        return https.get("api/thue-cong-viec");
    },
    getServiceId: (id) => {
        return https.get(`api/thue-cong-viec/${id}`)
    },
    addService: (data) => {
        return https.post("api/thue-cong-viec", data)
    },
    updateService: (data, id) => {
        return https.put(`api/thue-cong-viec/${id}`, data)
    },
    searchService: (data) => {
        return https.get("api/thue-cong-viec/phan-trang-tim-kiem", data);
    },
    deleteServiceId: (id) => {
        return https.delete(`api/thue-cong-viec/${id}`);
    },
    getListService: () => {
        return https.get("api/thue-cong-viec/lay-danh-sach-da-thue");
    },
    completeService: (id) => {
        return https.post(`api/thue-cong-viec/hoan-thanh-cong-viec/${id}`);
    }
};