import { HeroUIProvider } from '@heroui/react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <HeroUIProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-nos" element={<AboutUsPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </HeroUIProvider>
  );
}

export default App;
