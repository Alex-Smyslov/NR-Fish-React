import './GalaryTileItem.css';

const GalaryTileItem = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <div className="gallery__card">
      <img className="gallery__card-pic" src={img} alt={alt} />
    </div>
  );
};

export default GalaryTileItem;
