import axios, { Axios, AxiosInstance } from 'axios';

export const networkInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 2000,
});

// export default { networkInstance };
