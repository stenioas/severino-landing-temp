import React from 'react';
import {
  HeroSection,
  StepsSection,
  ServicesSection,
  FeatureAccordion,
} from './components';
import { NewsletterForm } from '../../components';

const HomePage: React.FC = () => (
  <>
    <main className="bg-white min-h-screen flex flex-col">
      <HeroSection />
      <StepsSection />
      <ServicesSection />
      <FeatureAccordion />
      <NewsletterForm />
    </main>
  </>
);

export default HomePage;
