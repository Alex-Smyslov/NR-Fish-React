import React, { useEffect } from 'react';
import { ProductCard } from '../productCard';
import styles from './PostsPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../../store/app/effects';
import {
  getProductsListIsError,
  getProductsListIsLoading,
  getProductsListIsSuccess,
  getProductsListSelector,
} from '../../store/app/selectors';

export const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector(getProductsListSelector);
  const isSuccess = useSelector(getProductsListIsSuccess);
  const isError = useSelector(getProductsListIsError);
  const isLoading = useSelector(getProductsListIsLoading);

  useEffect(() => {
    dispatch(getProductsList());
  }, []);

  return (
    <div className={styles.postList}>
      {isSuccess &&
        products.length > 0 &&
        products.map(({ title, id, description }) => (
          <ProductCard key={id} title={title} body={description} id={id} />
        ))}
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error</span>}
    </div>
  );
};
