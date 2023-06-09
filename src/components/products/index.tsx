import React, { useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { ProductCard } from '../productCard';
import styles from './ProductsPage.module.scss';
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
    <>
      <div className={styles.productList}>
        {isSuccess &&
          products.length > 0 &&
          products.map(({ id, img, title, description, price, rating }) => (
            <ProductCard
              key={id}
              id={id}
              img={img}
              title={title}
              description={description}
              price={price}
              rating={rating}
            />
          ))}
      </div>
      {isLoading && (
        <div className={styles.productSpinner}>
          <TailSpin
            height="80"
            width="80"
            color="#5c62ec"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      {isError && <span className={styles.error}>Error</span>}
    </>
  );
};
