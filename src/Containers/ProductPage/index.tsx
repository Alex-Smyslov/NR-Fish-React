import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../store/app/effects';
import {
  getProductByIdIsError,
  getProductByIdIsLoading,
  getProductByIdIsSuccess,
  getProductByIdSelector,
} from '../../store/app/selectors';
import styles from './ProductPage.module.scss';

export const ProductPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector(getProductByIdSelector);
  const isSuccess = useSelector(getProductByIdIsSuccess);
  const isError = useSelector(getProductByIdIsError);
  const isLoading = useSelector(getProductByIdIsLoading);

  const goBack = () => {
    navigate('/catalog');
  };

  useEffect(() => {
    if (params.id) {
      dispatch(getProductById(params.id));
    }
  }, []);

  return (
    <>
      {isSuccess && product.length > 0 && (
        <div className={styles.container}>
          <span>{`Hi i am product number - ${params.id ?? ''} `}</span>
          <span>{product.img}</span>
          <span>{product.title}</span>
          <span>{product.description}</span>
          <span>{product.price}</span>
          <button onClick={goBack}>Назад</button>
        </div>
      )}
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error</span>}
    </>
  );
};
