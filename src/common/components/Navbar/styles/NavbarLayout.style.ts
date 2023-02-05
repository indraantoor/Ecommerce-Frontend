import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: rgb(41, 40, 39);
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 2;

  ul {
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
      padding: 10px 15px;
      color: white;
      transition: 0.3s ease-in all;
    }

    li:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;
