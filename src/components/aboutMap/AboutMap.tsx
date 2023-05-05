import React from 'react';
import styles from './AboutMap.module.scss';


const AboutMap = () => {
	return (
		<div className={styles.aboutMap}>
			<div className={styles.mapAddress}>
				<p>г. Нижний Новгород, ул. Ванеева, дом 93, 1-й этаж</p>
			</div>
			<div className={styles.map__columnRight}>
				<iframe
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Aafefd09ac281f5b16f65f66d0e5df6c00bb9f8971a6343e24cd40db1e86c0a55&amp;source=constructor"
					width="100%"
					height="550"
				></iframe>
			</div>
		</div>
	);
};

export default AboutMap;