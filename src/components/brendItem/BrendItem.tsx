import '../../helpers/brendsList';
import styles from './BrendItem.module.scss';

const BrendItem = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <div className={styles.brend__item}>
      <img src={img} alt={alt} />
    </div>
  );
};

export default BrendItem;
