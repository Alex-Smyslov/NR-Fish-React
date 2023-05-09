import React from 'react';
import styles from './AboutMap.module.scss';

const AboutMap = () => {
  return (
    <div className={styles.aboutMap}>
      <div className={styles.aboutStore__description}>
        <p className={styles.aboutStore__title}>НИЖЕГОРОДСКИЙ РЫБОЛОВ52</p>
        <div className={styles.aboutStore__address}>
          <p>г. Нижний Новгород, ул. Ванеева, дом 93, 1-й этаж</p>
        </div>
        <p className={styles.aboutStore__text}>
          Рыболовный мультибрендовый магазин &quot;Нижегородский рыболов52&quot; находится на рынке
          более 10 лет. Ассортимент магазина соствавляет более 10 000 наименований товаров для
          рыбалки и активного отдыха. Наши специалисты помогут подобрать товары под нужные условия
          ловли и наиболее подходящие для Вас. Широкий спектр товаров, представленный в магазине,
          точно удовлетворит потребности любого, даже самого требовательного рыболова. Все товары,
          представленные в магазине, являются официальной продукцией именитых брендов и имеют
          гарантию производителя. Товар закупается напрямую без посредников, что делает товары
          дешевле, чем у конкурентов. В магазине имеется возможность приобрести товары в рассрочку.
          Более того, каждому покупателю предоставляется персональная скидка на товары, которая
          сделает покупку ещё приятней!
        </p>
      </div>
      <div className={styles.aboutMap__right}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aafefd09ac281f5b16f65f66d0e5df6c00bb9f8971a6343e24cd40db1e86c0a55&amp;source=constructor"
          width="100%"
          height="550"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutMap;
