import styled from 'styled-components';

export const SearchBoxContainer = styled.div`
  .wrapper {
    display: flex;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    input {
      flex-grow: 1;
      outline: none;
      border: none;
      padding: 6px 15px;
    }

    button {
      padding: 6px 10px;
      background: orange;
      border: none;
      outline: none;
      color: white;
      cursor: pointer;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }
`;
