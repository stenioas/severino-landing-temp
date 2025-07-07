import { Link, Navbar, NavbarBrand, NavbarContent } from '@heroui/react';

import './Header.css';

const Header: React.FC = () => {
  return (
    <Navbar
      isBordered
      isBlurred={false}
      role="banner"
      maxWidth="xl"
      shouldHideOnScroll
      className="header--navbar"
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="header--logo-link">
            <img src={'logo.svg'} alt="Severino logo" className="h-5 w-auto" />
          </Link>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
