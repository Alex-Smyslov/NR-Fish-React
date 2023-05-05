import React from 'react';
import { profit } from '../../helpers/profit';
import ProfitItem from '../profitsItem/ProfitItem';
import styles from './AboutProfit.module.scss';

const AboutProfit = () => {
  return (
    <div className={styles.aboutProfit}>
      <div className={styles.properties__card}>
        {profit.map((item) => {
          return <ProfitItem key={item.id} img={item.img} alt={item.alt} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default AboutProfit;
