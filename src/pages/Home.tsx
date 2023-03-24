import SectionTitle from '../components/sectionTitle/SectionTitle';
import BrendItem from '../components/brendItem/BrendItem';
import '../styles/Home.css';
import { brends } from '../helpers/brendsList';

const Home = () => {
  return (
    <main className="section">
      <div className="container">
        <SectionTitle text="Главная" />
        <main>
          <div className="main-banner">
            <div className="main-banner__wrapper">
              <div className="container main-banner__height main-banner--text">
                <SectionTitle text="Продажа техники, товаров и аксессуаров для рыбалки и отдыха" />
                <h3 className="main-banner__place">в г. Нижний Новгород</h3>
                <p className="main-banner__slogan">Ни хвоста, ни чешуи!</p>
              </div>
            </div>
          </div>

          <section className="banner">
            <div className="container">
              <SectionTitle text="Наши предложения" />
              <div className="banner-grid">
                <div className="banner-grid__item item-11">
                  <a className="button primary-btn--green" href="#">
                    Удилища
                  </a>
                </div>
                <div className="banner-grid__item item-12">
                  <a className="button primary-btn--green" href="#">
                    Кормушки
                  </a>
                </div>
                <div className="banner-grid__item item-22">
                  <div className="banner__slider flex">
                    <div className="slider__wrapper">
                      <div className="slide slide1 slide--active">
                        <img src="assets/images/main-slider/slide-1.jpg" alt="slide-1" />
                      </div>
                      <div className="slide slide2">
                        <img src="assets/images/main-slider/slide-2.jpg" alt="slide-2" />
                      </div>
                      <div className="slide slide3">
                        <img src="assets/images/main-slider/slide-3.jpg" alt="slide-3" />
                      </div>
                    </div>
                    <div className="dots__wrapper flex">
                      <span className="dot dot--active"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                </div>
                <div className="banner-grid__item item-31">
                  <a className="button primary-btn--green" href="#">
                    Катушки
                  </a>
                </div>
                <div className="banner-grid__item item-32">
                  <a className="button primary-btn--green" href="#">
                    Приманки
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="brend">
            <div className="container">
              <SectionTitle text="Популярные бренды" />
              <div className="brend-grid">
                {brends.map((brend) => {
                  return <BrendItem key={brend.id} img={brend.img} alt={brend.alt} />;
                })}
              </div>
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
        </main>
      </div>
    </main>
  );
};
export default Home;
