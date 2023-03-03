import axios from "axios";
//request interceptor
axios.interceptors.request.use(
  async (config) => {
     const token = localStorage.getItem("accessToken");
     if (token) {
       config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
//response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function  (error) {
    // console.log(error);
    // if (error?.response?.status ===401) {
    //   toast.error('Session Expired');
    //   localStorage.removeItem("accessToken");
    //   window.location.href = "/";
    // }
    return Promise.reject(error);
  }
);
export default axios;