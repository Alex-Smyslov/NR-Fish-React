import styles from './ProfitItem.module.scss';

const ProfitItem = ({ img, alt, text }: { img: string; alt: string; text: string }) => {
	return (
		<div className={styles.profit}>
			<img className={styles.profit__image} src={img} alt={alt} />
			<h4 className={styles.profit__title}>{text}</h4>
		</div>
	);
};

export default ProfitItem;
