import { Link, Navbar, NavbarBrand, NavbarContent } from '@heroui/react';

import './Header.css';
import { getAssetUrl } from '../../utils/getAssetUrl';

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
            <img
              src={getAssetUrl('logo.svg')}
              alt="Severino App logo"
              className="header--logo"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
