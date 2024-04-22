import axios from 'axios';

const baseURL = import.meta.env.NODE_ENV === "development"
  ? "http://localhost:3033/"
  : "http://localhost:3033/"

const app = axios.create({
    baseURL,
    withCredentials: true
})

app.defaults.withCredentials = true;

export default app;