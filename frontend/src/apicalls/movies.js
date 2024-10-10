const { axiosInstance } = require("./axiosInstance");

export const GetAllMovies = async (payload) => {
  try {
    const response = await axiosInstance().get(
      `http://localhost:8080/api/movies/list`,
      payload
    );
    return response;
  } catch (error) {
    return error;
  }
};
