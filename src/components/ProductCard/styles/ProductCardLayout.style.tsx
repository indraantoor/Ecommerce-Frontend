import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  background: white;
  cursor: pointer;
  border-radius: 5px;
  padding: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: column;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  .product-information {
    text-align: center;
    font-size: 20px;
    width: 100%;
  }

  .price-container {
    font-size: 16px;
    margin-top: 15px;
  }

  .price {
    color: orange;
    margin-right: 5px;
  }

  .image-container {
    flex-grow: 1;
    position: relative;
    padding: 35%;
    height: 0;
    width: 0;

    .image {
      object-fit: contain;
    }
  }
`;
