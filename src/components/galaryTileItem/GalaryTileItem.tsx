import './GalaryTileItem.css';

const GalaryTileItem = ({ key, img, alt }: { key: string; img: string; alt: string }) => {
  return (
    <div className="gallery__card">
      <img className="gallery__card-pic" key={key} src={img} alt={alt} />
    </div>
  );
};

export default GalaryTileItem;
