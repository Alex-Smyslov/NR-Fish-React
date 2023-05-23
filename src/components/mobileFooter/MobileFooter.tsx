import './mobileFooter.scss';

interface TProps {
  isOpenMenu: boolean;
  isMobile: boolean;
}

const MobileFooter = ({ isOpenMenu, isMobile }: TProps) => {
  return (
    <div className={`mobile__wrapp ${isOpenMenu && isMobile ? 'isActive' : ''}`}>
      <a className="phone mobile__phone" href="tel:+79103979890">
        +7 (910) 397 - 98 - 90
      </a>
      <br />
      <p>Ни хвоста, ни чешуи!</p>
    </div>
  );
};

export default MobileFooter;
