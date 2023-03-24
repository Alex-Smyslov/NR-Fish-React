import './SectionTitle.css';

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <h2 className="section-title">
      {text}
      <span className="section-title__border"></span>
    </h2>
  );
};

export default SectionTitle;
