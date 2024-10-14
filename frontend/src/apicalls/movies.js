import { BASEURL } from "./booking";

const { axiosInstance } = require("./axiosInstance");

export const GetAllMovies = async (payload) => {
  try {
    const response = await axiosInstance().get(
      `https://${BASEURL}/api/movies/list`,
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
      `https://${BASEURL}/api/movies/add-movie`,
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
      `https://${BASEURL}/api/movies/update-movie`,
      payload
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const DeleteMovie = async (payload) => {
  try {
    const response = await axiosInstance().post(
      `https://${BASEURL}/api/movies/delete-movie`,
      payload
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const GetMovieById = async (movieId) => {
  try {
    const response = await axiosInstance().get(
      `https://${BASEURL}/api/movies/get-by-id/${movieId}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
