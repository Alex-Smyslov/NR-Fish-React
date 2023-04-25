import { NavLink } from 'react-router-dom';
import './MainMenu.css';

interface TProps {
	changeVisibleNavMenu?: () => void;
}

const MainMenu = ({ changeVisibleNavMenu }: TProps) => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';
	return (
		<>
			<nav className="main-menu">
				<ul className="nav-list">
					<li className="nav-list__item">
						<NavLink
							to="/"
							onClick={changeVisibleNavMenu}
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
						>
							Главная
						</NavLink>
					</li>

					<li className="nav-list__item">
						<NavLink
							to="/catalog"
							onClick={changeVisibleNavMenu}
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
						>
							Каталог
						</NavLink>
					</li>

					<li className="nav-list__item">
						<NavLink
							to="/about"
							onClick={changeVisibleNavMenu}
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
						>
							О нас
						</NavLink>
					</li>
					<li className="nav-list__item">
						<NavLink
							to="/galary"
							onClick={changeVisibleNavMenu}
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
						>
							Галерея
						</NavLink>
					</li>
					<li className="nav-list__item">
						<NavLink
							to="/posts"
							onClick={changeVisibleNavMenu}
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
						>
							API
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default MainMenu;
