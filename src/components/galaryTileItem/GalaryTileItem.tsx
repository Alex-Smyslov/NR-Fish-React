import styles from './GalaryTileItem.module.scss';

const GalaryTileItem = ({ img, alt }: { img: string; alt: string }) => {
	return (
		<div className={styles.gallery__card}>
			<img src={img} alt={alt} />
		</div>
	);
};

export default GalaryTileItem;
