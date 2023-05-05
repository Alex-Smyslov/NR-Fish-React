import React from 'react';
import styles from './AboutQuestion.module.scss';

const AboutQuestion = () => {
	return (
		<>
			<details className={styles.question__wrapp}>
				<summary className={styles.question__heading}>
					Вы продаете оригинальные товары?
				</summary>
				<p className={styles.question__content}>
					Да, наш магазин реализует только оригинальную продукцию.
					<br /> Мы сотрудничаем только с официальным представителлями брендов.
				</p>
			</details>
			<details className={styles.question__wrapp}>
				<summary className={styles.question__heading}>Могу ли я вернуть товар?</summary>
				<p className={styles.question__content}>
					Вы имеете право вернуть товар в течении 7 дней с момента оплаты или получения.
					<br />
					Товарный вид не должен быть нарушен. Товар принимается в офисе компании.
				</p>
			</details>
			<details className={styles.question__wrapp}>
				<summary className={styles.question__heading}>Как оплатить товар?</summary>
				<p className={styles.question__content}>
					Мы принимаем:
					<br />
					1 Банковские карты
					<br />
					2 Прямые платежи на расчетный счет
					<br />3 Наличные
				</p>
			</details>
			<details className={styles.question__wrapp}>
				<summary className={styles.question__heading}>Предусмотрены ли скидки?</summary>
				<p className={styles.question__content}>
					Да, постоянным клиентам предоставляются скидки в 10% по карте магазина
				</p>
			</details>
		</>
	);
};

export default AboutQuestion;