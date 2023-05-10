import React from 'react';
import hour from './image/hour.png';
import phone from './image/phone.png';
import styles from './AboutMap.module.scss';

const AboutMap = () => {
	return (
		<div className={styles.aboutMap}>
			<div className={styles.aboutMap__description}>
				<p className={styles.aboutMap__title}>NR-Fishing52</p>
				<div className={styles.aboutMap__address}>
					<p>Наш адрес:<br /></p>
					<p className={styles.aboutMap__address_bold}>г. Нижний Новгород, ул. Ванеева, дом 93, 1-й этаж</p>
				</div>
				<div className={styles.aboutMap__info}>
					<p>Время работы:</p>
					<div className={styles.aboutMap__infoItem}>
						<img src={hour} alt="Hour" />
						<p>Пн-Пт с 9:00 до 20:00<br />Сб-Вс с 9:00 до 18:00</p>
					</div>
					<p>Телефон:</p>
					<div className={styles.aboutMap__infoItem}>
						<img src={phone} alt="Phone" />
						<p>+7 (910) 397 - 98 - 90</p>
					</div>
				</div>
			</div>
			<span></span>
			<div className={styles.aboutMap__right}>
				<iframe
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Aafefd09ac281f5b16f65f66d0e5df6c00bb9f8971a6343e24cd40db1e86c0a55&amp;source=constructor"
					width="100%"
					height="450"
				></iframe>
			</div>
		</div>
	);
};

export default AboutMap;
