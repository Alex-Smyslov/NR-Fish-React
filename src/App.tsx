import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './Containers/Home/Home';
import Catalog from './Containers/Catalog/Catalog';
import About from './Containers/About/About';
import Galary from './Containers/Galary/Galary';
import NotFound from './Containers/NotFound/NotFound';
import ScrollToTop from './utils/scrollToTop';
import Header from './components/header/Header';
import { routes } from './utils/constants/routes';
import { ProductPage } from './Containers/ProductPage';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.CATALOG}>
          <Route element={<Catalog />} index />
          <Route path=":id" element={<ProductPage />} />
        </Route>
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.GALARY} element={<Galary />} />
        <Route path={routes.NOTFOUND} element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
