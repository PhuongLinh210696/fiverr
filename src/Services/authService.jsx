import { https } from "./config";

export const authSer = {
  signin: (data) => {
    return https.post("api/auth/signin", data);
  },
  signup: (data) => {
    return https.post("api/auth/signup", data);
  },
};