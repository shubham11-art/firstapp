import axios from "axios";
import endpointsF from "./endpointsF";

const APIF = axios.create({
  baseURL: endpointsF.serverBaseUrl,
});

export default APIF;
