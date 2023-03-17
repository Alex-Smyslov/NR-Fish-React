import React, { useState } from 'react';
import { useMediaQuery } from '../../utils/isMobile';
import Logotype from '../logotype/Logotype';
import Navbar from '../navbar/Navbar';
import './style.css';

const Header = () => {
  const isMobile = useMediaQuery(800);
  console.log(isMobile);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    (document.querySelector('.nav-menu') as HTMLBodyElement).classList.toggle('isActive');
    (document.querySelector('.hamburger--spin') as HTMLBodyElement).classList.toggle('isActive');
    (document.querySelector('.mobile__wrapp') as HTMLBodyElement).classList.toggle('isActive');
    setMenuOpen(!menuOpen);
  };

  //   const removeActive = () => {
  //     if (isMobile === true) {
  //       console.log(isMobile);
  //     } else {
  //       (document.querySelector('.nav-menu') as HTMLBodyElement).classList.remove('isActive');
  //       (document.querySelector('.hamburger--spin') as HTMLBodyElement).classList.remove('isActive');
  //       (document.querySelector('.mobile__wrapp') as HTMLBodyElement).classList.remove('isActive');
  //     }
  //   };

  //   window.addEventListener('resize', removeActive);

  //   const resizeRemove = (isMobile: boolean) => {
  //     const [isNewMobile, setIsNewMobile] = useState(isMobile);

  //     useEffect(() => {
  //       (document.querySelector('.nav-menu') as HTMLBodyElement).classList.remove('isActive');
  //       (document.querySelector('.hamburger--spin') as HTMLBodyElement).classList.remove('isActive');
  //       (document.querySelector('.mobile__wrapp') as HTMLBodyElement).classList.remove('isActive');
  //     }, [isMobile]);
  //   };
  //   const resizeRemove = isMobile ? '' : removeActive();

  window.addEventListener('resize', () => {
    (document.querySelector('.nav-menu') as HTMLBodyElement).classList.remove('isActive');
    (document.querySelector('.hamburger--spin') as HTMLBodyElement).classList.remove('isActive');
    (document.querySelector('.mobile__wrapp') as HTMLBodyElement).classList.remove('isActive');
  });

  //   if (isMobile) {
  //     (document.querySelector('.nav-menu') as HTMLBodyElement).classList.toggle('isActive');
  //     (document.querySelector('.hamburger--spin') as HTMLBodyElement).classList.toggle('isActive');
  //     (document.querySelector('.mobile__wrapp') as HTMLBodyElement).classList.toggle('isActive');
  //     setMenuOpen(!menuOpen);
  //   } else {
  //     (document.querySelector('.nav-menu') as HTMLBodyElement).classList.remove('isActive');
  //     (document.querySelector('.hamburger--spin') as HTMLBodyElement).classList.remove('isActive');
  //     (document.querySelector('.mobile__wrapp') as HTMLBodyElement).classList.remove('isActive');
  //   }

  //   const closeMenu = () => {
  //     (document.querySelector('.main-menu') as HTMLBodyElement).classList.remove('isActive');
  //     setMenuOpen(false);
  //   };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logotype />
          {isMobile && (
            <button
              onClick={handleToggleMenu}
              className="header__toggle hamburger hamburger--spin"
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"> </span>
              </span>
            </button>
          )}
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
