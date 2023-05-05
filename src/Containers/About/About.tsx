import SectionTitle from '../../components/sectionTitle/SectionTitle';
import AboutStore from '../../components/aboutStore/AboutStore';
import AboutProfit from '../../components/aboutProfit/AboutProfit';
import AboutQuestion from '../../components/aboutQuestion/AboutQuestion';
import AboutMap from '../../components/aboutMap/AboutMap';
import styles from './About.module.scss';

const About = () => {
  return (
    <main className={styles.about}>
      <div className={styles.about__container}>
        <section className={styles.about__store}>
          <SectionTitle text="О нас" />
          <AboutStore />
        </section>

        <section className={styles.properties}>
          <div className={styles.properties__wrapp}>
            <SectionTitle text="Преимущества работы с нами" />
            <AboutProfit />
          </div>
        </section>

        <section className={[styles.section, styles.question].join(' ')}>
          <div className={styles.container}>
            <SectionTitle text="Часто задаваемые вопросы" />
            <AboutQuestion />
          </div>
        </section>

        <section className={styles.map}>
          <div className={styles.container}>
            <SectionTitle text="Как нас найти" />
            <AboutMap />
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
