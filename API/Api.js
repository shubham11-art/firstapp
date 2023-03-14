import axios from "axios";
import config from "./config.json";

const Api = axios.create({
  baseURL: config.serverBaseURL,
});

// Api.interceptors.request.use((req) => {
//   req.headers["Authorization"] = "Sampletoken";
//   return req;
// });

// Api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     console.log(err.response.status);
//     console.log("Handle the error");
//     return Promise.reject(err);
//   }
// );

export default Api;
