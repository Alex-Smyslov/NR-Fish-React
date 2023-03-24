import './BrendItem.css';
import '../../helpers/brendsList.ts';

interface IBrendItem {
  img: string;
  alt: string;
}

const BrendItem = ({ img, alt }: IBrendItem) => {
  return (
    <div className="brend-grid__item">
      <img className="brend__pic" src={img} alt={alt} />
    </div>
  );
};

export default BrendItem;
