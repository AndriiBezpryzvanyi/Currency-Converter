import axiosInstance from "../api/api";

export const getCurrency = async () => {
  return await axiosInstance.get(
    "/NBUStatService/v1/statdirectory/exchange?json"
  );
};
