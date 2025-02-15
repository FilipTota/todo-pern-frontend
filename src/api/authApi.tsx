const api_URL = import.meta.env.VITE_BACKEND_URL;

export const registerUser = async (data: object) => {
  const response = await fetch(`${api_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result;
};

export const loginUser = async (data: object) => {
  const response = await fetch(`${api_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result;
};
