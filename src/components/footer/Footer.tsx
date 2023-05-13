import { NavLink } from 'react-router-dom';
import Logotype from '../logotype/Logotype';
import MainMenu from '../mainMenu/MainMenu';
import './Footer.css';

const Footer = () => {
  const date = new Date();
  const dateOut = date.getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper grid">
          <div className="footer__column-1">
            <Logotype />
            <div className="footer__politics">
              <p className="footer__politics-text">
                &#169; 2012-{dateOut} Все права защищены
                <br />
                <NavLink to="/not-found" className="footer__politics-link">
                  Политика конфидециальности
                </NavLink>
              </p>
            </div>
            <div className="footer__politics">
              <p className="footer__politics-text">
                Все видеозаписи, изображения и текст на этом сайте защищены законом об авторском
                праве и не могут переиспользоваться где-либо без письменного разрешения
                правообладателя.
              </p>
            </div>
          </div>
          <div className="footer__column-2">
            <MainMenu />
          </div>
          <div className="footer__column-3">
            <div className="footer__feedback">
              <div className="footer__feedback-number phone">
                <a className="phone" href="tel:+79103979890">
                  +7 (910) 397 - 98 - 90
                </a>
              </div>
              <div className="footer__feedback-email email">
                <p className="email">andrey@mail.ru</p>
              </div>
              <div className="footer__feedback-adress adress">
                <p>
                  г. Нижний Новгород, ул. Ванеева д.93
                  <br />
                  Ежедневно с 9:00 до 18:00
                </p>
              </div>
              <div className="footer__cash">
                <div className="footer__icons">
                  <a href="https://vk.com/public209453090" target="blank">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 0C10.7457 0 0 10.7457 0 24C0 37.2543 10.7457 48 24 48C37.2543 48 48 37.2543 48 24C48 10.7457 37.2543 0 24 0Z"
                        fill="var(--purple)"
                      />
                      <path
                        d="M37.2576 16.7765C37.3128 16.5953 37.3392 16.4273 37.332 16.2773C37.314 15.8429 37.0152 15.5273 36.312 15.5273H33.1704C32.3772 15.5273 32.0112 16.0073 31.7976 16.4885C31.7976 16.4885 29.8392 20.5193 27.582 23.1773C26.85 23.9465 26.478 23.9273 26.082 23.9273C25.8696 23.9273 25.3332 23.6705 25.3332 22.9661V16.7441C25.3332 15.9113 25.1256 15.5273 24.4548 15.5273H18.876C18.3876 15.5273 18.1332 15.9113 18.1332 16.2965C18.1332 17.0969 19.2108 17.2889 19.3332 19.5317V23.8793C19.3332 24.9353 19.1496 25.1273 18.7536 25.1273C17.6856 25.1273 15.5832 21.5273 14.1756 16.8089C13.8708 15.8801 13.566 15.5273 12.7728 15.5273H9.6012C8.6856 15.5273 8.5332 15.9761 8.5332 16.4561C8.5332 17.3213 9.2532 21.9989 13.1832 27.3773C16.0332 31.2773 19.788 33.5273 23.112 33.5273C25.1256 33.5273 25.332 33.0149 25.332 32.2145V28.6481C25.3332 27.6869 25.5528 27.5273 26.1936 27.5273C26.6508 27.5273 27.5832 27.8273 29.3832 29.9273C31.4592 32.3489 31.836 33.5273 33.0264 33.5273H36.168C36.8976 33.5273 37.3164 33.2213 37.3332 32.6273C37.3368 32.4761 37.3152 32.3069 37.266 32.1185C37.0332 31.4273 35.9652 29.7377 34.6332 28.1273C33.8952 27.2357 33.1668 26.3525 32.832 25.8725C32.6076 25.5593 32.5224 25.3385 32.5332 25.1273C32.544 24.9053 32.6592 24.6941 32.832 24.3989C32.8008 24.3989 36.8616 18.6977 37.2576 16.7765Z"
                        fill="white"
                      />
                      <defs>
                        <clipPath id="clip0_664_74">
                          <rect width="48" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
