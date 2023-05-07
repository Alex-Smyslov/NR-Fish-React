import { NavLink } from 'react-router-dom';
import styles from './BtnMain.module.scss';

const BtnMain = ({ text, to }: { text: string; to: string }) => {
  return (
    <NavLink to={to} className="btn__link">
      <button className={styles.btn}>{text}</button>
    </NavLink>
  );
};

export default BtnMain;
