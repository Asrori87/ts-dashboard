import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000, // Timeout 5 detik
});

// Buat tipe khusus untuk data error
interface ErrorResponse {
  message: string;
}

export const fetchData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const errorMessage =
      axiosError.response?.data?.message || "An error occurred";

    throw new Error(errorMessage);
  }
};
