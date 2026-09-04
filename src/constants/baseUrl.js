const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://ecsina.com/api";
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || "v1";

export const API_CONFIG = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const API_ENDPOINTS = {
  PRODUCTS: {
    ALL: `${BASE_URL}/${API_VERSION}/Product`,
    SHOW: (id) => `${BASE_URL}/${API_VERSION}/Product/${id}`,
  },
  CATEGORIES: {
    ALL: `${BASE_URL}/${API_VERSION}/Category`,
  },
  AUTH: {
    VERIFY_OTP: `${BASE_URL}/${API_VERSION}/accounts/auth/verify-otp/`,
  },
};
