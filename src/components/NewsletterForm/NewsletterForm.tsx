import { Button, Card, Input } from '@heroui/react';
import React, { useState, useEffect } from 'react';

import './NewsletterForm.css';
import { getAssetUrl } from '../../utils/getAssetUrl';
import { saveNewsletterEmail } from '../../api/newsletterApi';

// Hook para detectar breakpoint
const useBreakpoint = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsDesktop(window.innerWidth >= 960);
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);

    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  return isDesktop;
};

const NewsletterForm: React.FC = () => {
  const isDesktop = useBreakpoint();
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    saveNewsletterEmail(email);
  };

  return (
    <section
      className="newsletter--section"
      aria-label="Assine nossa newsletter"
    >
      <Card shadow="none" className="newsletter--card">
        <h4 className="newsletter--title">
          Venha{' '}
          <span className="newsletter--title-highlight">com a gente</span>{' '}
          fazer parte{' '}
          <span className="newsletter--title-highlight">dessa revolução</span>
        </h4>
        <p className="newsletter--description">
          Não perca nenhuma novidade! Receba atualizações do app, promoções
          exclusivas, novos serviços, parcerias incríveis e muito mais.
        </p>
        <form
          className="newsletter--form"
          onSubmit={(e) => {
            handleSubmit();
            e.preventDefault();
          }}
        >
          <Input
            type="email"
            variant="faded"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            endContent={
              <Button
                className="newsletter--send-button"
                radius="sm"
                type="submit"
              >
                Enviar
              </Button>
            }
            classNames={{
              input: 'newsletter--input',
              inputWrapper: 'newsletter--inputWrapper',
            }}
          />
        </form>
        <img
          className="newsletter--img"
          src={getAssetUrl(
            isDesktop ? 'newsletter_tools_large.svg' : 'newsletter_tools.svg',
          )}
          alt="Ilustração com ferramentas"
        />
      </Card>
    </section>
  );
};

export default NewsletterForm;
