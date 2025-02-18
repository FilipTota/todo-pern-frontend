import Cookies from "js-cookie";

const api_URL = import.meta.env.VITE_BACKEND_URL;

export const getAllTodos = async () => {
  try {
    const jwtToken = Cookies.get("accessToken");
    if (!jwtToken) {
      throw new Error("Authorization token is missing");
    }

    const response = await fetch(`${api_URL}/api/todos`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    });

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

export const getSingleTodo = async (id: number) => {
  try {
    const response = await fetch(`${api_URL}/api/todos/${id}`);

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

export const createTodo = async (description: string) => {
  try {
    const jwtToken = Cookies.get("accessToken");
    if (!jwtToken) {
      throw new Error("Authorization token is missing");
    }

    const response = await fetch(`${api_URL}/api/todos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error while creating todo:", error);
    return []; // Return an empty array in case of error
  }
};

export const updateTodo = async (id: number, newDescription: string) => {
  try {
    const response = await fetch(`${api_URL}/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: newDescription,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error while updating todo:", error);
    return []; // Return an empty array in case of error
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await fetch(`${api_URL}/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error while deleting todo:", error);
    return []; // Return an empty array in case of error
  }
};
