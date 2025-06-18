import React from 'react';
import ValueCard from '../ValueCard';

import handshake from '/handshake.svg';
import diamond from '/diamond.svg';
import smartphone from '/smartphone.svg';
import diversity from '/diversity.svg';

const ValueCardProps = [
  {
    icon: <img src={handshake} alt="Relações de confiança" />,
    title: 'Relações de confiança',
    description:
      'Selecionamos e conectamos profissionais comprometidos com a qualidade, para que você tenha sempre a segurança de contar com um serviço bem feito.',
  },
  {
    icon: <img src={diamond} alt="Compromisso com a qualidade" />,
    title: 'Compromisso com a qualidade',
    description:
      'Acreditamos que um bom serviço vai além de cumprir uma tarefa, ele deve surpreender, resolver de verdade e deixar uma boa impressão sempre para o cliente e prestador.',
  },
  {
    icon: <img src={smartphone} alt="Simplicidade que resolve" />,
    title: 'Simplicidade que resolve',
    description:
      'Nossa plataforma foi criada para facilitar sua vida. Agende, acompanhe e resolva tudo de forma rápida e descomplicada como deve ser.',
  },
  {
    icon: <img src={diversity} alt="Valorização de pessoas" />,
    title: 'Valorização de pessoas',
    description:
      'Acreditamos no poder da colaboração. Criamos oportunidades para prestadores crescerem e para clientes encontrarem exatamente o que precisar.',
  },
];

const ValuesSection: React.FC = () => (
  <section
    aria-label="Nossos valores"
    style={{
      width: '100%',
      maxWidth: '1280px',
      margin: '4.5rem auto 0',
      padding: '0 1rem',
      fontFamily: '"Open Sans", sans-serif',
    }}
  >
    <h2
      style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        letterSpacing: '-0.0625rem',
        color: '#1C1C1C',
      }}
    >
      Nossos valores
    </h2>
    <div
      style={{
        marginTop: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.75rem',
      }}
    >
      {ValueCardProps.map((step, index) => (
        <ValueCard key={index} {...step} />
      ))}
    </div>
  </section>
);

export default ValuesSection;
