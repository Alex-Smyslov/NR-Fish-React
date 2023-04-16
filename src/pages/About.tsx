import '../styles/About.css';

import SectionTitle from '../components/sectionTitle/SectionTitle';

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
              <div className="properties__card card">
                <img className="card__image" src="assets/images/quality.png" alt="" />
                <h4 className="card__title">Опыт работы с 2012 года</h4>
              </div>
              <div className="properties__card card">
                <img className="card__image" src="assets/images/price.png" alt="" />
                <h4 className="card__title">
                  Цены нa 5-10% ниже, чeм у посpeдникoв. Товары можно приобрести в рассрочку
                </h4>
              </div>
              <div className="properties__card card">
                <img className="card__image" src="assets/images/toolchain.png" alt="" />
                <h4 className="card__title">Качественные товары с гарантией производителя</h4>
              </div>
              <div className="properties__card card">
                <img className="card__image" src="assets/images/order.png" alt="" />
                <h4 className="card__title">Принимаем предзаказы на любые товары</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="section guarantee">
          <div className="container">
            <SectionTitle text="Часто задаваемые вопросы" />
            <details className="guarantee__wrapp">
              <summary className="guarantee__heading">Вы продаете оригинальные товары?</summary>
              <p className="guarantee__content main-text">
                Да, наш магазин реализует только оригинальную продукцию.
                <br /> Мы сотрудничаем только с официальным представителлями брендов.
              </p>
            </details>
            <details className="guarantee__wrapp">
              <summary className="guarantee__heading">Могу ли я вернуть товар?</summary>
              <p className="guarantee__content main-text">
                Вы имеете право вернуть товар в течении 7 дней с момента оплаты или получения.
                <br />
                Товарный вид не должен быть нарушен. Товар принимается в офисе компании.
              </p>
            </details>
            <details className="guarantee__wrapp">
              <summary className="guarantee__heading">Как оплатить товар?</summary>
              <p className="guarantee__content main-text">
                Мы принимаем:
                <br />
                1 Банковские карты
                <br />
                2 Прямые платежи на расчетный счет
                <br />3 Наличные
              </p>
            </details>
            <details className="guarantee__wrapp">
              <summary className="guarantee__heading">Предусмотрены ли скидки?</summary>
              <p className="guarantee__content main-text">
                Да, постоянным клиентам предоставляются скидки в 10% по карте магазина
              </p>
            </details>
            <details className="guarantee__wrapp">
              <summary className="guarantee__heading">Могу ли я сделать предзаказ?</summary>
              <p className="guarantee__content main-text">
                Вы можете сделать предзаказ любого товара в нашем магазине
              </p>
            </details>
            <details className="guarantee__wrapp">
              <summary className="guarantee__heading">
                Возможна ли рассрочка платежа за товары?
              </summary>
              <p className="guarantee__content main-text">
                В нашем магазине предусмотрена рассрочка сроком до 1 года
              </p>
            </details>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
