import React from 'react';
import styles from './ProductCard.module.scss';
import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/constants/routes';

interface IProps {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
}

export const ProductCard = ({ id, img, title, description, price }: IProps) => {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.card__img} src={img} alt={title} />
        <NavLink className={styles.card__link} to={`${routes.CATALOG}/${id}`}>
          <span className={styles.card__label}>{title}</span>
        </NavLink>
        <details className={styles.card__description}>
          <summary className={styles.card__description_header}>Описание</summary>
          <p className={styles.card__description_content}>{description}</p>
        </details>
        <p className={styles.card__price}>
          Цена: <span>{price}</span> руб.
        </p>
      </div>
    </>
  );
};
