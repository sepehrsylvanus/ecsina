import axiosInstance from "@/utils/axiosInstance";
import { handleAxiosError } from "@/utils/axiosHelpers";

export const loginUser = async (email, password) => {
  try {
    const { data } = await axiosInstance.post("token/", {
      email,
      password,
    });

    // Store tokens in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      // Set cookie for middleware (expires in 7 days)
      const expires = new Date();
      expires.setDate(expires.getDate() + 7);
      document.cookie = `token=${data.access}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;
    }

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

export const logoutUser = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};
