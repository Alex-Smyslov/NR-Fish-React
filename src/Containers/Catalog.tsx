import React from 'react';
import SectionTitle from '../components/sectionTitle/SectionTitle';
import BrendItem from '../components/brendItem/BrendItem';
import { brends } from '../helpers/brendsList';
import SliderBanner from '../components/sliderBanner/SliderBanner';
import { slides } from '../components/sliderBanner/slides';

import '../styles/Catalog.css';
import { Products } from '../components/products';

const Catalog = () => {
  return (
    <main className="section">
      <section className="banner">
        <SliderBanner slides={slides} />
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

      <section className="catalog">
        <div className="container">
          <SectionTitle text="Каталог" />
          <Products />
        </div>
      </section>
    </main>
  );
};
export default Catalog;
