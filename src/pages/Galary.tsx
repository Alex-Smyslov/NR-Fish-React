import SectionTitle from '../components/sectionTitle/SectionTitle';
import GalaryTileItem from '../components/galaryTileItem/GalaryTileItem';
import { galaryTile } from '../helpers/galaryTileList';
import '../styles/Galary.css';
import Slider from '../components/slider/Slider';
import slides from '../components/slider/mock.json';

const Galary = () => {
  return (
    <main className="galary section">
      <div className="container">
        {/* <SectionTitle text="Галерея" />
        <section className="galary__main">
          <div className="galary__main-container container"></div>
        </section> */}

        <section className="galary__examples">
          <div className="galary__examples-container container">
            <SectionTitle text="Фотогалерея магазина" />
            <Slider slides={slides} />
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

export default Galary;
