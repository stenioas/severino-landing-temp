import { ChevronRightIcon } from '../../icons';
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';
import React, { useState, useRef } from 'react';

import './Header.css';
import { getAssetUrl } from '../../utils/getAssetUrl';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { label: 'Início', href: getAssetUrl('/') },
    { label: 'Sobre nós', href: getAssetUrl('/sobre-nos') },
    { label: 'Serviços', href: getAssetUrl('/servicos') },
    { label: 'Contato', href: getAssetUrl('/contato') },
  ];

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
                src={getAssetUrl('logo.svg')}
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
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              href={item.href}
              size="lg"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                fontSize: '1.25rem',
                letterSpacing: '-0.0625rem',
                color: '#1C1C1C',
                borderBottom: '0.5px solid #D4D4D4',
                padding: '1rem',
              }}
            >
              {item.label}
              <ChevronRightIcon
                size={16}
                className="header--menu-item-chevron"
              />
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
