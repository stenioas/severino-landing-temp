import { HeroUIProvider } from '@heroui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import { getAssetUrl } from './utils/getAssetUrl';

function App() {
  return (
    <HeroUIProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={getAssetUrl('/')} element={<HomePage />} />
          <Route path={getAssetUrl('/sobre-nos')} element={<AboutUsPage />} />
          <Route path={getAssetUrl('/servicos')} element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </HeroUIProvider>
  );
}

export default App;
