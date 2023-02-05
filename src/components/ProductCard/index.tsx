import { IProductCardComponentPropsTypes } from './core/interfaces/ProductCardProps.interface';
import ProductCardComponent from './ProductCard.component';

function ProductCard(props: IProductCardComponentPropsTypes) {
  return <ProductCardComponent {...props} />;
}

export default ProductCard;
