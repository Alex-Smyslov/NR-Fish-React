import React from 'react';
import BtnMain from '../../components/btnMain/BtnMain';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <main>
      <section className={styles.notFound}>
        <div className={styles.container}>
          <div className={styles.notFound__grid}>
            <div className={styles.notFound__image}>
              <img src="assets/images/404.gif" alt="" />
            </div>
            <div className={styles.notFound__bot}>
              <h1>
                404
                <br />
                NOT FOUND
              </h1>
              <h2>
                Эх, сорвалось...
                <br />
                Пожалуйста, вернитесь на Главную
                <br />
              </h2>
              <BtnMain to="/" text={'Main Page'} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
