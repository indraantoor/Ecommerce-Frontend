import { useAppContext } from '@/state/context/app-context';
import ProductCard from '../ProductCard';
import { useProductsListings } from './hooks/useProductsListings.hook';

export const ProductListingsComponent = () => {
  const context = useAppContext();
  const { searchText, category } = context?.state;
  const { data: products } = useProductsListings(category);

  return (
    <div
      style={{
        marginTop: '40px',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        <h2>Man & Woman Fashion</h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 18rem)',
          justifyContent: 'space-between',
          rowGap: '50px',
          padding: '0 120px',
        }}
      >
        {products
          ?.filter((product: any) => filterBySearchText(product, searchText))
          ?.map((product: any) => {
            return (
              <ProductCard
                key={product?.title}
                title={product?.title}
                price={product?.price}
                imageSrc={product?.image}
              />
            );
          })}
      </div>
    </div>
  );
};

function filterBySearchText(product: any, searchText: string) {
  if (searchText) {
    return product?.title?.toLowerCase()?.includes(searchText?.toLowerCase());
  } else {
    return product;
  }
}
