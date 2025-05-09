import axios from "axios";

const base_url = "https://api.themoviedb.org/3";

export const api = axios.create({ baseURL: base_url });

api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);
