import React from 'react';
import styles from './ProductCard.module.scss';
import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';
import Rating from '../rating/Rating';

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
        <NavLink className={styles.card__link} to={`${routes.CATALOG}/${id}`}>
          <span className={styles.card__label}>{title}</span>
        </NavLink>
        <Rating rating={rating} />
        <p className={styles.card__rating}>
          Рейтинг: <span>{rating}</span>
        </p>
        <p className={styles.card__price}>
          Цена: <span>{price}</span> руб.
        </p>
      </div>
    </>
  );
};
