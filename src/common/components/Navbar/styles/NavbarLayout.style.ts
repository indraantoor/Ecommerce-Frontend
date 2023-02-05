import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: rgb(41, 40, 39);
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 2;

  .mobile {
    display: none;
  }

  .burger-menu-full-screen {
    display: none;
    background: rgba(255, 255, 255, 0.98);
    position: fixed;
    margin-top: 60px;
    height: 100%;
    width: 100%;
  }

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

  .burger-menu {
    font-size: 25px;
    flex-direction: column;
    padding-top: 20px;

    li {
      color: black;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    li:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .icon-item {
      display: flex;
      gap: 10px;
    }
  }

  @media screen and (max-width: 595px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
    }

    .burger-menu-full-screen {
      display: block;
    }

    ul {
      font-size: 35px;
      padding: 0;
      justify-content: flex-end;
    }
  }
`;
