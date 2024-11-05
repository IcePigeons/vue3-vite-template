import axios from 'axios';

//配置 axios 实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
});
export default instance