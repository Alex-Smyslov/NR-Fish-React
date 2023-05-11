import { createSlice } from '@reduxjs/toolkit';
import { getProductsList, getProductById } from './effects';

interface IAppState {
	products: {
		data: any[];
		isSuccess: boolean;
		isLoading: boolean;
		isError: boolean;
	};
	currentProduct: {
		data: any;
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
	currentProduct: {
		data: null,
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
				products: {
					...state.products,
					isLoading: false,
					isError: false,
					isSuccess: true,
					data: payload,
				},
			};
		});
		builder.addCase(getProductsList.rejected, (state) => {
			return {
				...state,
				products: { isLoading: false, isError: true, isSuccess: false, data: [] },
			};
		});
		// GET CURRENT PRODUCT
		builder.addCase(getProductById.pending, (state) => {
			return {
				...state,
				currentProduct: { ...state.currentProduct, isLoading: true, isError: false, isSuccess: false },
			};
		});
		builder.addCase(getProductById.fulfilled, (state, { payload }) => {
			return {
				...state,
				currentProduct: {
					...state.currentProduct,
					isLoading: false,
					isError: false,
					isSuccess: true,
					data: payload,
				},
			};
		});
		builder.addCase(getProductById.rejected, (state) => {
			return {
				...state,
				currentProduct: { isLoading: false, isError: true, isSuccess: false, data: null },
			};
		});
	},
});

export const { reducer: appDataReducer, name: appDataNameReducer } = slice;
