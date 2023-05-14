import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';
import Rating from '../../components/rating/Rating';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../store/app/effects';
import {
  getProductByIdIsError,
  getProductByIdIsLoading,
  getProductByIdIsSuccess,
  getProductByIdSelector,
} from '../../store/app/selectors';
import styles from './ProductPage.module.scss';
import BtnMain from '../../components/btnMain/BtnMain';

export const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductByIdSelector);
  const isSuccess = useSelector(getProductByIdIsSuccess);
  const isError = useSelector(getProductByIdIsError);
  const isLoading = useSelector(getProductByIdIsLoading);

  useEffect(() => {
    if (params.id) {
      dispatch(getProductById(params.id));
    }
  }, []);

  return (
    <>
      {isError && <span>Error</span>}
      {isSuccess && product && (
        <>
          <div className={styles.product}>
            <div className={styles.product__container}>
              <div className={styles.product__image}>
                <img src={product.img} alt="Product" />
              </div>
              <div className={styles.product__product}>
                <p className={styles.product__title}>{product.title}</p>
                <Rating rating={product.rating} />
                <p className={styles.product__rating}>
                  Рейтинг: <span>{product.rating}</span>
                </p>
                <p className={styles.product__description}>{product.description}</p>
                <p className={styles.product__price}>
                  Цена: <span>{product.price}</span> руб.
                </p>
                <div className={styles.product__button}>
                  <BtnMain to="/catalog" text={'Назад'} />
                  <BtnMain to="/catalog" text={'Купить'} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {isLoading && (
        <div className={styles.product__spinner}>
          <TailSpin
            height="80"
            width="80"
            color="#5c62ec"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
          />
        </div>
      )}
    </>
  );
};
