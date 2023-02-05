import { NavbarContainer } from './styles/NavbarLayout.style';

const NavbarComponent = ({ ...props }) => {
  return (
    <NavbarContainer>
      <ul>
        <li tabIndex={1}>Best Sellers</li>
        <li tabIndex={2}>Gift Ideas</li>
        <li tabIndex={3}>New Releases</li>
        <li tabIndex={4}>Today's Deals</li>
        <li tabIndex={5}>Customer Service</li>
      </ul>
    </NavbarContainer>
  );
};

export default NavbarComponent;
