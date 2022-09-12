import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bank.gov.ua/",
});

export const GET = async (url: string, params?: AxiosRequestConfig) => {
  const res = await axiosInstance.get(url, { params });
  return { res };
};

export default axiosInstance;
