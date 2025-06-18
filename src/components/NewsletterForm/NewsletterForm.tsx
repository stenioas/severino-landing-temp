import { Button, Card, Input } from '@heroui/react';
import React from 'react';

import './NewsletterForm.css';
import { getAssetUrl } from '../../utils/getAssetUrl';

const NewsletterForm: React.FC = () => (
  <section
    style={{
      width: '100%',
      maxWidth: '1280px',
      margin: '5rem auto 0',
      padding: '0 1rem',
      fontFamily: '"Open Sans", sans-serif',
    }}
    aria-label="Assine nossa newsletter"
  >
    <Card
      shadow="none"
      style={{
        backgroundColor: '#E8F7F1',
        padding: '2rem 1.25rem 0 1.25rem',
      }}
    >
      <h4
        style={{
          fontWeight: 400,
          fontSize: '1.5rem',
          letterSpacing: '-0.0625rem',
          textAlign: 'center',
          padding: '0 0.75rem',
        }}
      >
        Assine nossa newsletter e faça{' '}
        <span
          style={{
            fontWeight: 600,
            color: '#096C76',
          }}
        >
          parte da revolução
        </span>
      </h4>
      <p
        style={{
          marginTop: '1rem',
          fontSize: '0.875rem',
          textAlign: 'center',
          color: '#7B7B7B',
        }}
      >
        Receba atualizações de funcionalidades, melhorias na usabilidade,
        promoções em lojas, novos serviços e muito mais
      </p>
      <form
        style={{
          marginTop: '1.5rem',
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          type="email"
          variant="faded"
          placeholder="Digite seu e-mail"
          endContent={
            <Button className="newsletter--send-button" radius="sm">
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
        src={getAssetUrl('newsletter_tools.svg')}
        alt="Ilustração com ferramentas"
      />
    </Card>
  </section>
);

export default NewsletterForm;
