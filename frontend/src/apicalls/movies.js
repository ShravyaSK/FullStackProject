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

export const AddMovie = async (payload) => {
  try {
    const response = await axiosInstance().post(
      `http://localhost:8080/api/movies/add-movie`,
      payload
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const UpdateMovie = async (payload) => {
  try {
    const response = await axiosInstance().post(
      `http://localhost:8080/api/movies/update-movie`,
      payload
    );
    return response;
  } catch (error) {
    return error;
  }
};
