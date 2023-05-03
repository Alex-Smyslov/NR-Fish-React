/* eslint-disable prettier/prettier */
import { type MutableRefObject, useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import MainBanner from '../../components/mainBanner/MainBanner';
import BtnMain from '../../components/btnMain/BtnMain';
import styles from './Home.module.scss';

const Home = () => {
  const nameStore = useRef() as MutableRefObject<HTMLHeadingElement>;
  useEffect(() => {
    const colors = gsap.to(nameStore.current, {
      'paused': false,
      'duration': 10,
      'repeat': -1,
      '--hue': 220,
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
          },
        })
        .to(nameStore, {
          duration: 0.1,
          opacity: 1,
          onComplete: function () {
            doRandom();
          },
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
    <main className={styles.main}>
      <div className={styles.main_banner}>
        <div className={styles.main__container}>
          <SectionTitle text="Товары и аксессуары для рыбалки и отдыха" />
          <div className={styles.main__wrapper}>
            <MainBanner />
            <div className={styles.main__text}>
              <h1 className={styles.main__store} ref={nameStore}>
                NR-Fishing52
              </h1>
            </div>
            <BtnMain to="/catalog" text="Learn More" />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
