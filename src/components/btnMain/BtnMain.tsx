import styles from './BtnMain.module.scss';

const BtnMain = ({ text }: { text: string }) => {
  return <button className={styles.btn}>{text}</button>;
};

export default BtnMain;
