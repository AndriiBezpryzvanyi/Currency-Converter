import axiosInstance from "../API/api";

export const getCurrency = async () => {
  return await axiosInstance.get(
    "/NBUStatService/v1/statdirectory/exchange?json"
  );
};
