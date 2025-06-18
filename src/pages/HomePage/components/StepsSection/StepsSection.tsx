import React from 'react';
import StepCard from '../StepCard';

import mysteryIcon from '/mystery.svg';
import engineeringIcon from '/engineering.svg';
import listAltAddIcon from '/list_alt_add.svg';
import listAltCheckIcon from '/list_alt_check.svg';

const steps = [
  {
    stepNumber: 1,
    icon: <img src={mysteryIcon} alt="Pesquise o serviço que deseja" />,
    title: 'Pesquise o serviço que deseja',
    description:
      'Precisa de um eletricista, encanador ou pintor? Nossa busca inteligente conecta você rapidamente aos melhores serviços e prestadores, sempre próximos de você. As melhores opções com rapidez e confiança em um clique.',
  },
  {
    stepNumber: 2,
    icon: <img src={engineeringIcon} alt="Escolha o tipo de profissional" />,
    title: 'Escolha o tipo de profissional',
    description:
      'Navegue pelas categorias de serviços e selecione o profissional ideal para resolver sua demanda. Seja para construção ou pequenos reparos, aqui você encontra as melhores opções sempre a sua disposição.',
  },
  {
    stepNumber: 3,
    icon: <img src={listAltAddIcon} alt="Preenchimento dos dados" />,
    title: 'Preenchimento dos dados',
    description:
      'Informe os detalhes do serviço, escolha o melhor horário e finalize sua solicitação em poucos passos. Assim, o profissional recebe todas as informações necessárias para atender você com rapidez , eficiência e segurança.',
  },
  {
    stepNumber: 4,
    icon: <img src={listAltCheckIcon} alt="Aprovação da solicitação" />,
    title: 'Aprovação da solicitação',
    description:
      'Sua solicitação foi enviada com sucesso?! Agora é só aguardar o prestador analisar os detalhes e confirmar a disponibilidade. Assim que ele aprovar, a solicitação vai para a seção ”aguardando início” na seção serviços.',
  },
];

const StepsSection: React.FC = () => (
  <section
    aria-label="Solução em serviços"
    style={{
      width: '100%',
      maxWidth: '1280px',
      margin: '5rem auto 0',
      padding: '0 1rem',
      fontFamily: '"Open Sans", sans-serif',
    }}
  >
    <h2
      style={{
        fontSize: '0.875rem',
        fontWeight: '600',
        letterSpacing: '-0.025rem',
        color: '#096C76',
        textAlign: 'center',
      }}
    >
      {'Solução em serviços'.toUpperCase()}
    </h2>
    <h3
      style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        letterSpacing: '-0.0625rem',
        color: '#1C1C1C',
        textAlign: 'center',
        marginTop: '1rem',
      }}
    >
      Simplicidade na hora de contratar quem você precisa
    </h3>
    <div
      style={{
        marginTop: '3.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.75rem',
      }}
    >
      {steps.map((step) => (
        <StepCard key={step.stepNumber} {...step} />
      ))}
    </div>
  </section>
);

export default StepsSection;
