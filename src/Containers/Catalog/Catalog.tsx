import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import BrendItem from '../../components/brendItem/BrendItem';
import { brends } from '../../helpers/brendsList';
import SliderBanner from '../../components/sliderBanner/SliderBanner';
import { slides } from '../../components/sliderBanner/slides';

import styles from './Catalog.module.scss';
import { Products } from '../../components/products';

const Catalog = () => {
	return (
		<main className={styles.catalog}>
			<div className={styles.catalog__banner}>
				<section className={styles.catalog__slider}>
					<SliderBanner slides={slides} />
				</section>
			</div>

			<div className={styles.catalog__container}>
				<section className={styles.brend}>
					<div className={styles.brend__wrapp}>
						<SectionTitle text="Популярные бренды" />
						<div className={styles.brendGrid}>
							{brends.map((brend) => {
								return <BrendItem key={brend.id} img={brend.img} alt={brend.alt} />;
							})}
						</div>
					</div>
				</section>

				<section className={styles.catalog}>
					<div className={styles.container}>
						<SectionTitle text="Каталог" />
						<Products />
					</div>
				</section>
			</div>

		</main>
	);
};
export default Catalog;
