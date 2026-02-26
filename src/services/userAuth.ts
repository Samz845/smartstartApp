import type { userLoginProp, userSignUpProp } from "../types/models";
import type { user } from "../types/models";
const BASE_URL = "https://capstone-hr-backend.onrender.com/api/users";

export const signUp = async (userData: userSignUpProp): Promise<user> => {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Registration failed");

  return data;
};

export const loginUser = async (user: userLoginProp): Promise<user> => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Unable to login");

  return data;
};

export const getCurrentUser = async (): Promise<user> => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const res = await fetch(`${BASE_URL}/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) return null;

  return res.json();
};

export const logOut = async () => {
  localStorage.removeItem("token");
};
