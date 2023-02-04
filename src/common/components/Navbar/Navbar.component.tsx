import { NavbarContainer } from '../styles/NavbarLayout.style';

const NavbarComponent = ({ ...props }) => {
  return (
    <NavbarContainer>
      <ul>
        <li>Best Sellers</li>
        <li>Gift Ideas</li>
        <li>New Releases</li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
      </ul>
    </NavbarContainer>
  );
};

export default NavbarComponent;
