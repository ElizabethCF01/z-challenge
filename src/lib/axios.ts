import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

instance.interceptors.request.use(
  async (config) => {
    try {
      config.headers["x-api-key"] = import.meta.env.VITE_API_KEY;
    } catch (error) {
      console.error(error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default instance;
