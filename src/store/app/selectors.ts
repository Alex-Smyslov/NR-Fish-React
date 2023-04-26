import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../configureStore';

const getProductsState = (state: TState) => state.app;
const getImagesState = (state: TState) => state.app;

export const getProductsListSelector = createSelector(getProductsState, ({ products }) => products.data);
export const getProductsListIsError = createSelector(getProductsState, ({ products }) => products.isError);
export const getProductsListIsSuccess = createSelector(getProductsState, ({ products }) => products.isSuccess);
export const getProductsListIsLoading = createSelector(getProductsState, ({ products }) => products.isLoading);

export const getImagesSelector = createSelector(
	getImagesState,
	({ images }) => images.data,
);
export const getImagesIsError = createSelector(
	getImagesState,
	({ images }) => images.isError,
);
export const getImagesIsSuccess = createSelector(
	getImagesState,
	({ images }) => images.isSuccess,
);
export const getImagesIsLoading = createSelector(
	getImagesState,
	({ images }) => images.isLoading,
);
