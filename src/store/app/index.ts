import { createSlice } from '@reduxjs/toolkit';
import { getProductsList, getImagesList } from './effects';

interface IAppState {
	products: {
		data: any[];
		isSuccess: boolean;
		isLoading: boolean;
		isError: boolean;
	};
	images: {
		data: any[];
		isSuccess: boolean;
		isLoading: boolean;
		isError: boolean;
	};
}

const initialState: IAppState = {
	products: {
		data: [],
		isSuccess: false,
		isLoading: false,
		isError: false,
	},
	images: {
		data: [],
		isSuccess: false,
		isLoading: false,
		isError: false,
	},
};

const slice = createSlice({
	name: 'app',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// GET PRODUCTS
		builder.addCase(getProductsList.pending, (state) => {
			return {
				...state,
				products: { ...state.products, isLoading: true, isError: false, isSuccess: false },
			};
		});
		builder.addCase(getProductsList.fulfilled, (state, { payload }) => {
			return {
				...state,
				products: { ...state.products, isLoading: false, isError: false, isSuccess: true, data: payload },
			};
		});
		builder.addCase(getProductsList.rejected, (state) => {
			return {
				...state,
				products: { isLoading: false, isError: true, isSuccess: false, data: [] },
			};
		});
		// GET IMAGES
		builder.addCase(getImagesList.pending, (state) => {
			return {
				...state,
				images: { ...state.images, isLoading: true, isError: false, isSuccess: false },
			};
		});
		builder.addCase(getImagesList.fulfilled, (state, { payload }) => {
			return {
				...state,
				images: {
					...state.images,
					isLoading: false,
					isError: false,
					isSuccess: true,
					data: payload,
				},
			};
		});
		builder.addCase(getImagesList.rejected, (state) => {
			return {
				...state,
				images: { isLoading: false, isError: true, isSuccess: false, data: [] },
			};
		});
	},
});

export const { reducer: appDataReducer, name: appDataNameReducer } = slice;
