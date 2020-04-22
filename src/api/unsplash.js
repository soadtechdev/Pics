import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID RyMJRJWBYuPArrZE0CzS-_iGpuMxW95dMQhBPgx-vWk",
  },
});
