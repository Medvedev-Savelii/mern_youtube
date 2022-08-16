import axios from "axios";
axios.defaults.withCredentials = true; // NEW

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

export default instance;
