// import '../styles/About.css';/

import SectionTitle from '../components/sectionTitle/SectionTitle';

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <main>
          <section className="about section">
            <div className="wrapper">
              <div className="about__content content" id="wrapp">
                <div className="content__wrapper">
                  <SectionTitle text="О нас" />
                  <div className="content__grid">
                    <div className="content__item">
                      <img src="assets/images/grid-icon1.svg" alt="" />
                      <p className="content__text">
                        Более 20 000 товаров в наличии на собственном складе
                      </p>
                    </div>
                    <div className="content__item">
                      <img src="assets/images/grid-icon4.svg" alt="" />
                      <p className="content__text">Гарантия на товар и возврат</p>
                    </div>
                    <div className="content__item">
                      <img src="assets/images/grid-icon6.svg" alt="" />
                      <p className="content__text">Скидка 10% по карте магазина</p>
                    </div>
                    <div className="content__item">
                      <img src="assets/images/grid-icon5.svg" alt="" />
                      <p className="content__text">Подтверждение заказа в течении 30 минут</p>
                    </div>
                    <div className="content__item">
                      <img src="assets/images/grid-icon2.svg" alt="" />
                      <p className="content__text">
                        Сотрудничаем только с официальными поставщиками
                      </p>
                    </div>
                    <div className="content__item">
                      <img src="assets/images/grid-icon3.svg" alt="" />
                      <p className="content__text">Доставка в любую точку области</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
              <div className="about__bubble">
                <span className="dot"></span>
              </div>
            </div>
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

          <section className="faq">
            <div className="container">
              <SectionTitle text="Часто задаваемые вопросы" />
              <div className="faq__list flex">
                <div className="list">
                  <div className="list__item">
                    <div className="list__question question">
                      <h3 className="question__text">Вы продаете оригинальные товары?</h3>
                    </div>

                    <div className="list__answer answer">
                      <p className="answer__text">
                        Да, наш магазин реализует только оригинальную продукцию.
                        <br /> Мы сотрудничаем только с официальным представителлями брендов.
                      </p>
                    </div>
                  </div>

                  <div className="list__item">
                    <div className="list__question question">
                      <h3 className="question__text">Могу ли я вернуть товар?</h3>
                    </div>

                    <div className="list__answer answer">
                      <p className="answer__text">
                        Вы имеете право вернуть товар в течении 7 дней с момента оплаты или
                        получения.
                        <br />
                        Товарный вид не должен быть нарушен. Товар принимается в офисе компании.
                      </p>
                    </div>
                  </div>

                  <div className="list__item">
                    <div className="list__question question">
                      <h3 className="question__text">Как оплатить товар?</h3>
                    </div>

                    <div className="list__answer answer">
                      <p className="answer__text">
                        {' '}
                        Мы принимаем:
                        <br />
                        1. Банковские карты
                        <br />
                        2. Прямые платежи на расчетный счет
                        <br />
                        3. Наличные
                      </p>
                    </div>
                  </div>

                  <div className="list__item">
                    <div className="list__question question">
                      <h3 className="question__text">Предусмотрены ли скидки?</h3>
                    </div>

                    <div className="list__answer answer">
                      <p className="answer__text">
                        {' '}
                        Да, постоянным клиентам предоставляются скидки в 10% по карте магазина
                      </p>
                    </div>
                  </div>

                  <div className="list__item">
                    <div className="list__question question">
                      <h3 className="question__text">Могу ли я сделать предзаказ?</h3>
                    </div>

                    <div className="list__answer answer">
                      <p className="answer__text">
                        {' '}
                        Вы можете сделать предзаказ любого товара в нашем магазине
                      </p>
                    </div>
                  </div>

                  <div className="list__item">
                    <div className="list__question question">
                      <h3 className="question__text">Возможна ли рассрочка платежа за товары?</h3>
                    </div>

                    <div className="list__answer answer">
                      <p className="answer__text">
                        {' '}
                        В нашем магазине предусмотрена рассрочка сроком до 1 года
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq__block-img">
                  <img className="faq__img" src="assets/images/faq-fish.png" alt="" />
                  <div className="faq__bubles buble1"></div>
                  <div className="faq__bubles buble2"></div>
                  <div className="faq__bubles buble3"></div>
                  <div className="faq__bubles buble4"></div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </main>
  );
};

export default Projects;
