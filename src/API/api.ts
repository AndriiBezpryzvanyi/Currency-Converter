import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bank.gov.ua/",
});

export default axiosInstance;
