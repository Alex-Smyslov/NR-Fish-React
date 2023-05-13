import axios from 'axios';

export const networkInstance = axios.create({
  baseURL: 'https://nr-fish-server.vercel.app',
  timeout: 4000,
});
