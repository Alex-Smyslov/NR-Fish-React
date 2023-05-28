import { useState } from 'react';
import { useMediaQuery } from '../../utils/isMobile';
import Logotype from '../logotype/Logotype';
import Navbar from '../navbar/Navbar';
import './style.scss';

const Header = () => {
  const isMobile = useMediaQuery(850);

  const [isOpenMenu, setIsopenMenu] = useState(false);

  const changeVisibleNavMenu = () => {
    setIsopenMenu(!isOpenMenu);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logotype />
          {isMobile && (
            <button
              onClick={changeVisibleNavMenu}
              className={`header__toggle hamburger hamburger--spin ${
                isOpenMenu && isMobile ? 'isActive' : ''
              }`}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"> </span>
              </span>
            </button>
          )}
          <Navbar
            isMobile={isMobile}
            isOpenMenu={isOpenMenu}
            changeVisibleNavMenu={changeVisibleNavMenu}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
