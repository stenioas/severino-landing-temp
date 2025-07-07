import { useEffect, useState } from 'react';

import './Carousel.css';
import { getAssetUrl } from '../../../../utils/getAssetUrl';

const data = [
  {
    url: getAssetUrl('img/hero/1_came_to_simplify.png'),
    alt: 'Viemos para simplificar',
  },
  {
    url: getAssetUrl('img/hero/2_choose_service.png'),
    alt: 'Viemos para simplificar',
  },
  {
    url: getAssetUrl('img/hero/3_best_services.png'),
    alt: 'Viemos para simplificar',
  },
  {
    url: getAssetUrl('img/hero/4_details_before_hiring.png'),
    alt: 'Viemos para simplificar',
  },
  {
    url: getAssetUrl('img/hero/5_realtime_service_values.png'),
    alt: 'Viemos para simplificar',
  },
];

export const Carousel = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % data.length);
    }, 3000); // 3 segundos

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {data.map((item, index) => {
        return (
          <img
            src={item.url}
            alt={item.alt}
            key={index}
            className={slide === index ? 'slide' : 'slide slide-hidden'}
          />
        );
      })}
      <span className="indicators">
        {data.map((_, index) => {
          return (
            <button
              key={index}
              className={
                slide === index ? 'indicator' : 'indicator indicator-inactive'
              }
              onClick={() => setSlide(index)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
