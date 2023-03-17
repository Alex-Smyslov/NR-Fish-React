import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import MainMenu from '../mainMenu/MainMenu';
import MobileFooter from '../mobileFooter/MobileFooter';
import './style.css';

const Navbar = () => {
  return (
    <nav className="nav-menu">
      <div className="container">
        <div className="nav-menu_row">
          <MainMenu />
          <BtnDarkMode />
          <MobileFooter />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
