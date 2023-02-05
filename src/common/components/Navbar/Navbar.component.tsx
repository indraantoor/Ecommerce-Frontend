import { useState } from 'react';
import { NavbarContainer } from './styles/NavbarLayout.style';

const NavbarComponent = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <ul className="desktop">
        <li tabIndex={1}>Best Sellers</li>
        <li tabIndex={2}>Gift Ideas</li>
        <li tabIndex={3}>New Releases</li>
        <li tabIndex={4}>Today's Deals</li>
        <li tabIndex={5}>Customer Service</li>
      </ul>

      <ul className="mobile">
        <li tabIndex={1} onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}>
          <i className="bi bi-list" />
        </li>
      </ul>

      {isBurgerMenuOpen ? (
        <div className="burger-menu-full-screen">
          <ul className="burger-menu">
            <li tabIndex={1}>Best Sellers</li>
            <li tabIndex={2}>Gift Ideas</li>
            <li tabIndex={3}>New Releases</li>
            <li tabIndex={4}>Today's Deals</li>
            <li tabIndex={5}>Customer Service</li>
            <li tabIndex={6}>
              <div className="icon-item">
                <span>
                  <i className="bi bi-cart-fill" />
                </span>
                <span>Cart</span>
              </div>
            </li>
            <li tabIndex={7}>
              <div className="icon-item">
                <span>
                  <i className="bi bi-person-fill" />
                </span>
                <span>Login</span>
              </div>
            </li>
          </ul>
        </div>
      ) : null}
    </NavbarContainer>
  );
};

export default NavbarComponent;
