import axios from "axios";

const api = axios.create({
  baseURL: "http://ip_do_seu_computador:3000"
})

export default api;