import styles from './SectionTitle.module.scss';

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <h2 className={styles.sectionTitle}>
      {text}
      <span className={styles.sectionTitle__border}></span>
    </h2>
  );
};

export default SectionTitle;
