const api_URL = import.meta.env.VITE_BACKEND_URL;

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${api_URL}/api/users`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return []; // Return an empty array in case of error
  }
};

export const getSingleUser = async (id: number) => {
  try {
    const response = await fetch(`${api_URL}/api/users/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error while fetching todo:", error);
    return []; // Return an empty array in case of error
  }
};
