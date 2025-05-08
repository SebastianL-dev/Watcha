import { EnvConfig } from "@/config/env.config";
import axios from "axios";

const env = EnvConfig;

export const api = axios.create({ baseURL: env.base_url });

api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);
