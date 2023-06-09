import React from 'react';
import img from './image/store.jpg';
import styles from './AboutStore.module.scss';

const AboutStore = () => {
  return (
    <div className={styles.aboutStore}>
      <div className={styles.aboutStore__img}>
        <img src={img} alt="Store" />
      </div>
      <span></span>
      <div className={styles.aboutStore__description}>
        <p className={styles.aboutStore__title}>NR-Fishing52</p>
        <p className={styles.aboutStore__text}>
          Рыболовный мультибрендовый магазин &quot;NR-Fishing52&quot; находится на рынке более 10
          лет. Ассортимент магазина соствавляет более 10 000 наименований товаров для рыбалки и
          активного отдыха. Наши специалисты помогут подобрать товары под нужные условия ловли и
          наиболее подходящие для Вас. Широкий спектр товаров, представленный в магазине, точно
          удовлетворит потребности любого, даже самого требовательного рыболова. Все товары,
          представленные в магазине, являются официальной продукцией именитых брендов и имеют
          гарантию производителя. Товар закупается напрямую без посредников, что делает товары
          дешевле, чем у конкурентов. В магазине имеется возможность приобрести товары в рассрочку.
          Более того, каждому покупателю предоставляется персональная скидка на товары, которая
          сделает покупку ещё приятней!
        </p>
      </div>
    </div>
  );
};

export default AboutStore;
