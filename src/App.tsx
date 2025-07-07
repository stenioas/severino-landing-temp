import { HeroUIProvider } from '@heroui/react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <HeroUIProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </HeroUIProvider>
  );
}

export default App;
