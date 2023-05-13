import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../configureStore';

const getProductsState = (state: TState) => state.app;
const getImagesState = (state: TState) => state.app;

export const getProductsListSelector = createSelector(
  getProductsState,
  ({ products }) => products.data,
);
export const getProductsListIsError = createSelector(
  getProductsState,
  ({ products }) => products.isError,
);
export const getProductsListIsSuccess = createSelector(
  getProductsState,
  ({ products }) => products.isSuccess,
);
export const getProductsListIsLoading = createSelector(
  getProductsState,
  ({ products }) => products.isLoading,
);

export const getProductByIdSelector = createSelector(
  getImagesState,
  ({ currentProduct }) => currentProduct.data,
);
export const getProductByIdIsError = createSelector(
  getImagesState,
  ({ currentProduct }) => currentProduct.isError,
);
export const getProductByIdIsSuccess = createSelector(
  getImagesState,
  ({ currentProduct }) => currentProduct.isSuccess,
);
export const getProductByIdIsLoading = createSelector(
  getImagesState,
  ({ currentProduct }) => currentProduct.isLoading,
);
