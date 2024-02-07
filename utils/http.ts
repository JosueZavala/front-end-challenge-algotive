import axios, { AxiosRequestConfig } from "axios";
import { getApiUrl } from "./api";

const getInstance = (config?: AxiosRequestConfig) => {
  return axios.create({
    baseURL: "/",
    headers: {
      "Content-Type": "application/json",
      "accept-language": "es",
    },
    ...config,
  });
};

export const httpClient = getInstance({
  baseURL: getApiUrl(),
});
