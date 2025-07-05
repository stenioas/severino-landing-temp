import { getAssetUrl } from '../../../utils/getAssetUrl';

const ourServicesData = [
  {
    label: 'Chaveiro',
    icon: getAssetUrl('/key.svg'),
  },
  {
    label: 'Coberturas e fachadas',
    icon: getAssetUrl('/home_work.svg'),
  },
  {
    label: 'Decoração',
    icon: getAssetUrl('/table_lamp.svg'),
  },
  {
    label: 'Elétrica',
    icon: getAssetUrl('/electrical_services.svg'),
  },
  {
    label: 'Hidráulica',
    icon: getAssetUrl('/shower.svg'),
  },
  {
    label: 'Instalação de telas',
    icon: getAssetUrl('/curtains.svg'),
  },
  {
    label: 'Jardinagem',
    icon: getAssetUrl('/potted_plant.svg'),
  },
  {
    label: 'limpeza pós-obra',
    icon: getAssetUrl('/garden_cart.svg'),
  },
  {
    label: 'Pequenos reparos',
    icon: getAssetUrl('/engineering_gears.svg'),
  },
  {
    label: 'Pintura',
    icon: getAssetUrl('/format_paint.svg'),
  },
  {
    label: 'Vidraçaria',
    icon: getAssetUrl('/window.svg'),
  },
  {
    label: 'Serviços gerais',
    icon: getAssetUrl('/cleaning_services.svg'),
  },
  {
    label: 'Serviços domésticos',
    icon: getAssetUrl('/vacuum.svg'),
  },
  {
    label: 'Serviços de marcenaria',
    icon: getAssetUrl('/carpenter.svg'),
  },
  {
    label: 'Mais serviços em breve',
    icon: getAssetUrl('/add_circle.svg'),
  },
];

const ServiceCard = (label: string, icon: string) => {
  return (
    <div>
      <img src={icon} alt={label} />
      <p>{label}</p>
    </div>
  );
};

const OurServicesSection = () => {
  return (
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
        Nossos serviços
      </h2>
      <p
        style={{
          fontSize: '0.75rem',
          lineHeight: '1.125rem',
          letterSpacing: '-0.0625rem',
          color: '#7b7b7b',
          marginTop: '2rem',
        }}
      >
        No Severino App, cada serviço disponível foi pensado para facilitar o
        seu dia a dia com agilidade, confiança e qualidade. Reunimos
        profissionais experientes e preparados para atender às suas
        necessidades, seja em casa, no trabalho ou onde quiser.
      </p>
      <h3
        style={{
          marginTop: '2rem',
          fontSize: '0.75rem',
          lineHeight: '1rem',
          letterSpacing: 0,
        }}
      >
        Serviços disponíveis no momento
      </h3>
      <div>
        {ourServicesData.map((item) => (
          <img src={item.icon} alt={item.label} />
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;
