import { NavLink } from 'react-router-dom';
import styles from './BtnMain.module.scss';

const BtnMain = ({ text, to }: { text: string, to: string }) => {
	return <button className={styles.btn}>
		<NavLink to={to} className="btn__link">{text}</NavLink>
	</button>;
};

export default BtnMain;
