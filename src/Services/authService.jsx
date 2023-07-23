import { https } from "./config";

export const userSer = {
  signin: (data) => {
    return https.post("/api/auth/signin", data);
  },
  signup: (data) => {
    return https.post("/api/auth/signin", data);
  },
};