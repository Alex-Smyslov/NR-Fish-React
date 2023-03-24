import './mobileFooter.css';

interface TProps {
  isOpenMenu: boolean;
  isMobile: boolean;
}

const MobileFooter = ({ isOpenMenu, isMobile }: TProps) => {
  return (
    <div className={`mobile__wrapp ${isOpenMenu && isMobile ? 'isActive' : ''}`}>
      <a className="phone mobile__phone" href="tel:+79103979890">
        +7(910) 397 - 98 - 90
      </a>
      <br />
      <a className="mobile__btn modal--open" href="#!">
        Оставить заявку
      </a>
    </div>
  );
};

export default MobileFooter;
