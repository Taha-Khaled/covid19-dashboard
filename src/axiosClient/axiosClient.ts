import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.covidtracking.com/v1/",
});

export default axiosClient;
