import SectionTitle from '../../components/sectionTitle/SectionTitle';
import ProfitItem from '../../components/profitsItem/ProfitItem';
import { profit } from '../../helpers/profit';
import styles from './About.module.scss';

const About = () => {
	return (
		<main className={styles.about}>
			<div className={styles.about__container}>
				<section className={styles.about__store}>
					<SectionTitle text="О нас" />
				</section>

				<section className={styles.properties}>
					<div className={styles.properties__wrapp}>
						<SectionTitle text="Преимущества работы с нами" />
						<div className={styles.properties__card}>
							{profit.map((item) => {
								return <ProfitItem key={item.id} img={item.img} alt={item.alt} text={item.text} />;
							})}
						</div>
					</div>
				</section>

				<section className={[styles.section, styles.question].join(' ')}>
					<div className={styles.container}>
						<SectionTitle text="Часто задаваемые вопросы" />
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
					</div>
				</section>

				<section className={styles.map}>
					<div className={styles.container}>
						<SectionTitle text="Как нас найти" />
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
				</section>
			</div>
		</main >
	);
};

export default About;
