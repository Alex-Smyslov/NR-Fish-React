import './GalaryTileItem.css';

interface IGalaryTileItem {
  img: string;
  alt: string;
}

const GalaryTileItem = ({ img, alt }: IGalaryTileItem) => {
  return (
    <div className="gallery__card">
      <img className="gallery__card-pic" src={img} alt={alt} />
    </div>
  );
};

export default GalaryTileItem;
