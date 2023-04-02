import './BrendItem.css';
import '../../helpers/brendsList.ts';

const BrendItem = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <div className="brend-grid__item">
      <img className="brend__pic" src={img} alt={alt} />
    </div>
  );
};

export default BrendItem;
