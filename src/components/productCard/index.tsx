import React from 'react';
import styles from './PostCard.module.scss';
import { Link } from 'react-router-dom';
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
    <Link className={styles.cardWrapper} to={`${routes.CATALOG}/${id}`}>
      <img src={img} alt={title} />
      <span className={styles.label}>{title}</span>
      <p className={styles.content}>{description}</p>
      <p className={styles.content}>{price}</p>
    </Link>
  );
};
