import { type MutableRefObject, useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionTitle from '../components/sectionTitle/SectionTitle';
import '../styles/Home.css';

const Home = () => {
  const nameStore = useRef() as MutableRefObject<HTMLHeadingElement>;
  useEffect(() => {
    const colors = gsap.to(nameStore.current, {
      paused: true,
      duration: 20,
      repeat: -1,
      '--hue': 360
    });

    const doRandom = () => {
      gsap
        .timeline()
        .to(nameStore, {
          duration: 0.1,
          opacity: function () {
            return gsap.utils.random(0.9, 0.95);
          },
          delay: function () {
            return gsap.utils.random(0.1, 2);
          }
        })
        .to(nameStore, {
          duration: 0.1,
          opacity: 1,
          onComplete: function () {
            doRandom();
          }
        });
    };

    const mediaQuery: MediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');

    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain, @typescript-eslint/strict-boolean-expressions
    if (!mediaQuery || !mediaQuery.matches) {
      colors.play();
      doRandom();
    }
  });

  return (
    <main className="section">
      <div className="main-banner">
        <div className="main-banner__wrapper">
          <div className="container main-banner--text">
            <h1 className="mainStore" ref={nameStore}>
              NR-Fishing52
            </h1>
            <SectionTitle text="Продажа техники, товаров и аксессуаров для рыбалки и отдыха" />
            <h3 className="main-banner__place">в г. Нижний Новгород</h3>
            <p className="main-banner__slogan">Ни хвоста, ни чешуи!</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
