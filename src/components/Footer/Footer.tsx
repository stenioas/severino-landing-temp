import { Link } from '@heroui/react';
import React from 'react';
import { getAssetUrl } from '../../utils/getAssetUrl';

const Footer: React.FC = () => (
  <footer
    style={{
      width: '100%',
      maxWidth: '1280px',
      margin: '50px auto 110px',
      padding: '0 1rem',
      fontFamily: '"Open Sans", sans-serif',
    }}
    role="contentinfo"
  >
    <div className="flex flex-col">
      <div className="flex flex-col items-start" style={{ gap: '1.5rem' }}>
        <img
          src={getAssetUrl('logo.svg')}
          alt="Severino logo"
          className="h-5 w-auto"
        />
        <div className="flex items-center gap-2">
          <img src={getAssetUrl('email.svg')} alt="Email" />
          <Link
            href="mailto:contato@severino.app.br"
            style={{
              fontSize: '0.875rem',
              lineHeight: '1rem',
              color: '#6B6B6B',
            }}
          >
            contato@severino.app.br
          </Link>
        </div>
      </div>
      <hr
        style={{
          borderColor: '#D4D4D4',
          borderTopWidth: '0.5px',
          marginTop: '1rem',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '1.5rem',
          gap: '4rem',
        }}
      >
        <div className="flex gap-3">
          <div
            style={{
              height: '2.5rem',
              width: '2.5rem',
              border: '1px solid #E0E0E0',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link
              href="https://www.instagram.com/severinoappbr/"
              target="_blank"
              aria-label="Instagram"
              className="text-[#096C76] hover:text-[#075a61]"
            >
              <img src={getAssetUrl('instagram.svg')} alt="Instagram" />
            </Link>
          </div>
          <div
            style={{
              height: '2.5rem',
              width: '2.5rem',
              border: '1px solid #E0E0E0',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link
              href="/"
              aria-label="Facebook"
              className="text-[#096C76] hover:text-[#075a61]"
            >
              <img src={getAssetUrl('facebook.svg')} alt="Facebook" />
            </Link>
          </div>
          <div
            style={{
              height: '2.5rem',
              width: '2.5rem',
              border: '1px solid #E0E0E0',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link
              href="https://www.linkedin.com/company/severinoappbr/"
              target="blank"
              aria-label="LinkedIn"
              className="text-[#096C76] hover:text-[#075a61]"
            >
              <img src={getAssetUrl('linkedin.svg')} alt="LinkedIn" />
            </Link>
          </div>
        </div>
        <span
          className="text-xs text-gray-400"
          style={{
            fontSize: '0.75rem',
            lineHeight: '1rem',
            color: '#7B7B7B',
          }}
        >
          © 2025 Severino. Todos os direitos reservados.
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
