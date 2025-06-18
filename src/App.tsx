import { HeroUIProvider } from '@heroui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <HeroUIProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-nos" element={<AboutUsPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </HeroUIProvider>
  );
}

export default App;
