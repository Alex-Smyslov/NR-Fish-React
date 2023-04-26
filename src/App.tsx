import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './Containers/Home';
import Catalog from './Containers/Catalog';
import About from './Containers/About';
import Galary from './Containers/Galary';
import NotFound from './Containers/NotFound';
import ScrollToTop from './utils/scrollToTop';
import Header from './components/header/Header';
import { routes } from './utils/constants/routes';
import { PostsPage } from './Containers/PostsPage';
import { PostPage } from './Containers/PostPage';
import './styles/main.css';

function App() {
	return (
		<div className="App">
			<ScrollToTop />
			<Header />
			<Routes>
				<Route path={routes.HOME} element={<Home />} />
				<Route path={routes.CATALOG} element={<Catalog />} />
				<Route path={routes.ABOUT} element={<About />} />
				<Route path={routes.GALARY} element={<Galary />} />
				<Route path={routes.NOTFOUND} element={<NotFound />} />
				<Route path={routes.PRODUCTS}>
					<Route element={<PostsPage />} index />
					<Route path=":id" element={<PostPage />} />
				</Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
