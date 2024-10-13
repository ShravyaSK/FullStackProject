const { axiosInstance } = require("./axiosInstance");

export const GetShowsByTheatreId = async (theatreId) => {
  try {
    const response = await axiosInstance().get(
      `http://localhost:8080/api/shows/get-all-shows-by-theatre-id`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const GetShowById = async (showId) => {
  try {
    const response = await axiosInstance().get(
      `http://localhost:8080/api/shows/get-show-by-id/${showId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const AddShow = async (payload) => {
  try {
    const response = await axiosInstance().post(
      `http://localhost:8080/api/shows/add-show`,
      payload
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const DeleteShow = async (payload) => {
  try {
    const response = await axiosInstance().post(
      `http://localhost:8080/api/shows/delete-show`,
      payload
    );
    return response;
  } catch (error) {
    return error;
  }
};
