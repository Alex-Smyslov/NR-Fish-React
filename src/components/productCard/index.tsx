import React from 'react';
import styles from './ProductCard.module.scss';
import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';
import Rating from '../rating/Rating';
import BtnMain from '../btnMain/BtnMain';

interface IProps {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  rating: number;
}

export const ProductCard = ({ id, img, title, price, rating }: IProps) => {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.card__img} src={img} alt={title} />
        <div className={styles.card__info}>
          <NavLink className={styles.card__link} to={`${routes.CATALOG}/${id}`}>
            <span className={styles.card__label}>{title}</span>
          </NavLink>
          <div className={styles.card__rating}>
            <Rating rating={rating} />
            <span className={styles.card__rating_number}>{rating}</span>
          </div>
          <p className={styles.card__price}>
            Цена: <span>{price}</span> руб.
          </p>
          <BtnMain text={'Купить'} to={'/catalog'} />
        </div>
      </div>
    </>
  );
};
