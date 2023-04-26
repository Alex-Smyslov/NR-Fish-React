import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from '../../utils/network';

export const getProductsList = createAsyncThunk('/api/products', async (_, { rejectWithValue }) => {
	try {
		const response = await networkInstance.get('api/products');
		return response.data;
	} catch (e) {
		return rejectWithValue(e);
	}
});

export const getImagesList = createAsyncThunk(
	'api/images',
	async (id: string, { rejectWithValue }) => {
		try {
			const response = await networkInstance.get('api/images');
			return response.data;
		} catch (e) {
			return rejectWithValue(e);
		}
	},
);
