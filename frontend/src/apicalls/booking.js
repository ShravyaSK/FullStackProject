import { axiosInstance } from "./axiosInstance";

// export const BASEURL = "bms-project-4kbl.onrender.com";
export const BASEURL = window.location.host;


export const MakePayment = async (payload) => {
  try {
    const response = await axiosInstance().post(
      `https://${BASEURL}/api/booking/make-payment`,
      payload
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const BookShowTickets = async (payload) => {
  try {
    const response = await axiosInstance().post(
      `https://${BASEURL}/api/booking/book-show`,
      payload
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const GetBookingsOfUser = async () => {
  try {
    const response = await axiosInstance().get(
      `https://${BASEURL}/api/booking/get-bookings`
    );
    return response;
  } catch (error) {
    return error;
  }
};
