import axiosInstance from "@/utils/axiosInstance";
import { handleAxiosError } from "@/utils/axiosHelpers";

export const getHomeData = async () => {
  try {
    const { data } = await axiosInstance.get("/home");

    return {
      data,
      error: null,
    };
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    return {
      data: null,
      error: errorMessage,
    };
  }
};
