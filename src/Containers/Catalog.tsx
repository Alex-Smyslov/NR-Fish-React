import React from 'react';
import SectionTitle from '../components/sectionTitle/SectionTitle';
import BrendItem from '../components/brendItem/BrendItem';
import { brends } from '../helpers/brendsList';
import '../styles/Catalog.css';


const Catalog = () => {
	return (
		<main className="section">
			<div className="container">
				<section className="banner">
					<div className="container">
						<SectionTitle text="Наши предложения" />
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
					</div>
				</section>
			</div>
		</main>
	);
};
export default Catalog;
