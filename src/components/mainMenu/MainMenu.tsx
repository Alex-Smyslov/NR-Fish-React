import { NavLink } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';
	return (
		<>
			<nav className="main-menu">
				<ul className="nav-list">
					<li className="nav-list__item">
						<NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
							Главная
						</NavLink>
					</li>

					<li className="nav-list__item">
						<NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
							О нас
						</NavLink>
					</li>
					<li className="nav-list__item">
						<NavLink to="/galary" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
							Галерея
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default MainMenu;
