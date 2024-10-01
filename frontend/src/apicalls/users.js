const { axiosInstance } = require("./axiosInstance");

// Register a new User

export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance().post(
      `http://localhost:8080/api/users/register`,
      payload
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance().post(
      `http://localhost:8080/api/users/login`,
      payload
    );
    return response;
  } catch (error) {
    return error;
  }
};

//get Current User
export const GetCurrentUser = async () => {
  
};
