import { Card } from '@heroui/react';
import AppStoreButtons from '../../../../components/AppStoreButtons';
import { Carousel } from '../Carousel/Carousel';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <Card className="hero-card" shadow="none" aria-label="Hero section">
        <Carousel />
        <div className="hero-content-container">
          <div className="hero-content">
            <p className="hero-title">
              Contrate Profissionais de Serviço de{' '}
              <span className="hero-title-highlight">forma rápida</span>
              <br />
              com{' '}
              <span className="hero-title-highlight">
                facilidade e segurança
              </span>
            </p>
            <p className="hero-subtitle">
              Conectamos você aos melhores serviços para ajudar no seu dia a
              dia.
            </p>
          </div>
          <div className="hero-buttons">
            <AppStoreButtons />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default HeroSection;
