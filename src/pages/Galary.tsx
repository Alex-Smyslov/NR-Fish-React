import SectionTitle from '../components/sectionTitle/SectionTitle';
import GalaryTileItem from '../components/galaryTileItem/GalaryTileItem';
import { galaryTile } from '../helpers/galaryTileList';
// import SliderGalary from '../utils/galary';
import '../styles/Galary.css';
// import '../utils/sliderGalary';

const Contacts = () => {
  return (
    <main className="galary section">
      <div className="container">
        <SectionTitle text="Галерея" />

        <section className="galary__main">
          <div className="galary__main-container container"></div>
        </section>

        <section className="galary__examples">
          <div className="galary__examples-container container">
            <SectionTitle text="Фотогалерея магазина" />
            <div className="galary__examples-slider slider">
              <div className="slider-line flex">
                <div className="slide first">
                  <img src="assets/images/galary/slider/1.webp" alt="1" />
                </div>

                <div className="slide">
                  <img src="assets/images/galary/slider/2.webp" alt="2" />
                </div>
                <div className="slide">
                  <img src="assets/images/galary/slider/3.webp" alt="3" />
                </div>
                <div className="slide">
                  <img src="assets/images/galary/slider/4.webp" alt="4" />
                </div>
                <div className="slide">
                  <img src="assets/images/galary/slider/5.jpg" alt="5" />
                </div>
              </div>
              <div className="navigation-manual flex">
                <div className="manual-btn input--active" data-slide="0"></div>
                <div className="manual-btn" data-slide="1"></div>
                <div className="manual-btn" data-slide="2"></div>
                <div className="manual-btn" data-slide="3"></div>
                <div className="manual-btn" data-slide="4"></div>
              </div>
              <button className="slider-prev button primary-btn--blue">
                <img src="assets/images/galary/slider_arrow.svg" alt="Prev" />
              </button>
              <button className="slider-next button primary-btn--blue">
                <img src="assets/images/galary/slider_arrow.svg" alt="Next" />
              </button>
            </div>
          </div>
        </section>

        <section className="galary__section container">
          <SectionTitle text="Фотографии покупателей" />
          <div className="gallery__plit">
            {galaryTile.map((tile) => {
              return <GalaryTileItem key={tile.id} img={tile.img} alt={tile.alt} />;
            })}
          </div>

          <div className="slider2">
            <div className="slider__container">
              <button className="slider__btn slider__btn-left">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="slider__btn slider__btn-right">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <button className="slider__close">
              <i className="far fa-times-circle"></i>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contacts;
