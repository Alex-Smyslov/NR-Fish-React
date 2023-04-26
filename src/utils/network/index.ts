import axios, { Axios, AxiosInstance } from 'axios';

export const networkInstance = axios.create({
	baseURL: 'http://localhost:3001',
	timeout: 2000,
});