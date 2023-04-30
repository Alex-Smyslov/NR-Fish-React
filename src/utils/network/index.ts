import axios from 'axios';

export const networkInstance = axios.create({
  baseURL: 'https://nr-fish-server.vercel.app:3001',
  timeout: 2000,
});
