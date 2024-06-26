import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://server.unityinmotion.ca",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
})

export default baseURL;


export const ServerUrl = 'http://server.unityinmotion.ca'