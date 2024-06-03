import axios from "axios";

 const baseURL = axios.create({
  baseURL: "http://192.168.10.116:8000",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
})

export default baseURL;