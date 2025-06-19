import { ChevronRightIcon } from '../../icons';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';
// import { getAssetUrl } from '../../utils/getAssetUrl';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Sobre nós', path: '/sobre-nos' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Contato', path: '/contato' },
  ];

  const handleNavigate = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      role="banner"
      maxWidth="xl"
      shouldHideOnScroll
      style={{
        transition: 'all 0.3s ease-in-out',
      }}
    >
      {!isMenuOpen && (
        <NavbarContent>
          <NavbarBrand>
            <div
              ref={containerRef}
              style={{
                width: '100%',
              }}
            >
              <img
                src={'logo.svg'}
                alt="Severino logo"
                className="h-5 w-auto"
              />
            </div>
          </NavbarBrand>
        </NavbarContent>
      )}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        />
      </NavbarContent>

      <NavbarMenu style={{ paddingLeft: 0, paddingRight: 0, gap: 0 }}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <button
              type="button"
              onClick={() => handleNavigate(item.path)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                fontSize: '1.25rem',
                letterSpacing: '-0.0625rem',
                color: '#1C1C1C',
                border: 'none',
                background: 'none',
                borderBottom: '0.5px solid #D4D4D4',
                padding: '1rem',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              {item.label}
              <ChevronRightIcon
                size={16}
                className="header--menu-item-chevron"
              />
            </button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
