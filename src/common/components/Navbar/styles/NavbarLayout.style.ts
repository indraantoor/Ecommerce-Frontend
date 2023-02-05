import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: blue;
  display: flex;
  justify-content: center;

  ul {
    background-color: orange;
    max-width: 900px;
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    gap: 15px;
    padding: 8px;

    li {
      cursor: pointer;
      background-color: red;
      padding: 5px;
    }
  }

  /* &:before {
    transform: skew(20deg);
    height: 45px;
    width: 20px;
    background-color: red;
    content: '';
  } */
`;
