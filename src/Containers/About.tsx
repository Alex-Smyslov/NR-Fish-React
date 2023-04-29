import SectionTitle from '../components/sectionTitle/SectionTitle';
import AdvantagesItem from '../components/advantagesItem/AdvantagesItem';
import { advantages } from '../helpers/advantages';
import '../styles/About.css';

const About = () => {
  return (
    <main className="section">
      <div className="container">
        <section className="about section">
          <SectionTitle text="О нас" />
        </section>

        <section className="section properties">
          <div className="container">
            <SectionTitle text="Преимущества работы с нами" />
            <div className="properties__card_wrapp flex">
              {advantages.map((item) => {
                return (
                  <AdvantagesItem key={item.id} img={item.img} alt={item.alt} text={item.text} />
                );
              })}
            </div>
          </div>
        </section>

        <section className="section question">
          <div className="container">
            <SectionTitle text="Часто задаваемые вопросы" />
            <details className="question__wrapp">
              <summary className="question__heading">Вы продаете оригинальные товары?</summary>
              <p className="question__content main-text">
                Да, наш магазин реализует только оригинальную продукцию.
                <br /> Мы сотрудничаем только с официальным представителлями брендов.
              </p>
            </details>
            <details className="question__wrapp">
              <summary className="question__heading">Могу ли я вернуть товар?</summary>
              <p className="question__content main-text">
                Вы имеете право вернуть товар в течении 7 дней с момента оплаты или получения.
                <br />
                Товарный вид не должен быть нарушен. Товар принимается в офисе компании.
              </p>
            </details>
            <details className="question__wrapp">
              <summary className="question__heading">Как оплатить товар?</summary>
              <p className="question__content main-text">
                Мы принимаем:
                <br />
                1 Банковские карты
                <br />
                2 Прямые платежи на расчетный счет
                <br />3 Наличные
              </p>
            </details>
            <details className="question__wrapp">
              <summary className="question__heading">Предусмотрены ли скидки?</summary>
              <p className="question__content main-text">
                Да, постоянным клиентам предоставляются скидки в 10% по карте магазина
              </p>
            </details>
          </div>
        </section>

        <section className="map">
          <div className="container">
            <SectionTitle text="Как нас найти" />
            <div className="map-address">
              <p>г. Нижний Новгород, ул. Ванеева, дом 93, 1-й этаж</p>
            </div>
            <div className="map__column-right">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aafefd09ac281f5b16f65f66d0e5df6c00bb9f8971a6343e24cd40db1e86c0a55&amp;source=constructor"
                width="100%"
                height="550"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;