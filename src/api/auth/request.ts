import { SSRRequest } from "../axios";

export const registerRequest = async (data: any) => {
  const res = await SSRRequest({
    method: "POST",
    url: "/api/auth/register",
    data,
  });
  return res;
};

export const loginRequest = async (data: any) => {
  const res = await SSRRequest({
    method: "POST",
    url: "/api/auth/login",
    data,
  });
  return res;
};
