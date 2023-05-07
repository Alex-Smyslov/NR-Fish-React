import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import MainMenu from '../mainMenu/MainMenu';
import MobileFooter from '../mobileFooter/MobileFooter';
import './style.css';

interface TProps {
  isMobile: boolean;
  isOpenMenu: boolean;
  changeVisibleNavMenu: () => void;
}

const Navbar = ({ isMobile, isOpenMenu, changeVisibleNavMenu }: TProps) => {
  return (
    <nav className={`nav-menu ${isOpenMenu && isMobile ? 'isActive' : ''}`}>
      <div className="container">
        <div className="nav-menu__row">
          <MainMenu changeVisibleNavMenu={changeVisibleNavMenu} />
          <BtnDarkMode />
          <MobileFooter isOpenMenu={isOpenMenu} isMobile={isMobile} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
