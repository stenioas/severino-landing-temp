import React from 'react';
import { HeroSection } from './components';
import { NewsletterForm } from '../../components';

const HomePage: React.FC = () => (
  <>
    <main className="bg-white min-h-screen flex flex-col">
      <HeroSection />
      <NewsletterForm />
    </main>
  </>
);

export default HomePage;
