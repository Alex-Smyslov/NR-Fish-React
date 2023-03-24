import { NavLink } from 'react-router-dom';
import '../styles/404.css';

const NotFound = () => {
  return (
    <main>
      <section className="not-found">
        <div className="container">
          <div className="not-found__grid">
            <div className="not-found__image">
              <img src="assets/images/404.gif" alt="" />
            </div>
            <div className="not-found__bot">
              <h1>
                404
                <br />
                NOT FOUND
              </h1>
              <h2>
                Эх, сорвалось...
                <br />
                Пожалуйста, вернитесь на Главную
                <br />
              </h2>
              <NavLink to="/" className="primary-btn primary-btn--orange">
                На Главную
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
