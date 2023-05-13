import SectionTitle from '../../components/sectionTitle/SectionTitle';
import GalaryTileItem from '../../components/galaryTileItem/GalaryTileItem';
import { galaryTile } from '../../helpers/galaryTileList';
import Slider from '../../components/slider/Slider';
import { slides } from '../../components/slider/slides';
import styles from './Galary.module.scss';

const Galary = () => {
	return (
		<main className={styles.galary}>
			<div className={styles.galary__container}>
				<SectionTitle text="Фотогалерея магазина" />
				<section className={styles.galary__slider}>
					{/* <div className={styles.galary__sliderWrapp}> */}
					<Slider slides={slides} />
					{/* </div> */}
				</section>

				<section className={styles.galary__photo}>
					<SectionTitle text="Фотографии покупателей" />
					<div className={styles.galary__plit}>
						{galaryTile.map((tile) => {
							return <GalaryTileItem key={tile.id} img={tile.img} alt={tile.alt} />;
						})}
					</div>
				</section>
			</div>
		</main>
	);
};

export default Galary;
