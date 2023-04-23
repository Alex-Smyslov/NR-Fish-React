import styles from './AdvantagesItem.module.scss';

const AdvantagesItem = ({ img, alt, text }: { img: string; alt: string; text: string }) => {
  return (
    <div className={styles.adventades}>
      <img className={styles.card__image} src={img} alt={alt} />
      <h4 className={styles.card__title}>{text}</h4>
    </div>
  );
};

export default AdvantagesItem;
