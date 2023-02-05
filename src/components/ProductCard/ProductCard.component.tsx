import Image from 'next/image';
import { IProductCardComponentPropsTypes } from './core/interfaces/ProductCardProps.interface';
import { ProductCardContainer } from './styles/ProductCardLayout.style';

function ProductCardComponent({
  title = '',
  price = '',
  imageSrc = '',
  currency = '$',
}: IProductCardComponentPropsTypes) {
  return (
    <ProductCardContainer>
      <div className="product-information">
        <div>{title}</div>
        <div className="price-container">
          <span className="price">Price</span>
          {`${currency} ${price}`}
        </div>
      </div>
      <div className="image-container">
        <Image src={imageSrc} fill alt="product-image" className="image" />
      </div>
    </ProductCardContainer>
  );
}

export default ProductCardComponent;
