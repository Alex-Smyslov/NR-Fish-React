import './BrendItem.css';
import '../../helpers/brendsList.ts';

const BrendItem = ({ key, img, alt }: { key: string; img: string; alt: string }) => {
  return (
    <div className="brend-grid__item">
      <img className="brend__pic" key={key} src={img} alt={alt} />
    </div>
  );
};

export default BrendItem;
