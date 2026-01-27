import axios from "axios";

const baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const instance = axios.create({
  baseURL: baseURL,
});
