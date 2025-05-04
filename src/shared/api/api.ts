
import axios, { InternalAxiosRequestConfig } from "axios";
import { API_DOMAIN } from "../config/api_routes";

const api = axios.create({ baseURL: API_DOMAIN });
api.interceptors.request.use(request => requestInterceptor(request))

const requestInterceptor = (request: InternalAxiosRequestConfig<any>) => {
   request.withCredentials = true;
   return request;
}
export default api;