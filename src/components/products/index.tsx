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
    <div className={styles.productList}>
      {isSuccess &&
        products.length > 0 &&
        products.map(({ id, img, title, description, price }) => (
          <ProductCard
            key={id}
            id={id}
            img={img}
            title={title}
            description={description}
            price={price}
          />
        ))}
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error</span>}
    </div>
  );
};
