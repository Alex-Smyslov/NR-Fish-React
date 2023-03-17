import './styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Galary from './pages/Galary';
import ScrollToTop from './utils/scrollToTop';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galary" element={<Galary />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
