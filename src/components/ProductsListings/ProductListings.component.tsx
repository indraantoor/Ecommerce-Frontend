import { useAppContext } from '@/state/context/app-context';
import LoadingSpinner from '../LoadingSpinner';
import ProductCard from '../ProductCard';
import { useProductsListings } from './hooks/useProductsListings.hook';

export const ProductListingsComponent = () => {
  const context = useAppContext();
  const { searchText, category } = context?.state;
  const { data: products, isLoading } = useProductsListings(category);

  return (
    <div
      style={{
        marginTop: '40px',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          marginBottom: isLoading ? '5px' : '50px',
        }}
      >
        <h2
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          Man & Woman Fashion
        </h2>
        {!isLoading && (
          <p
            style={{
              margin: 0,
              padding: 0,
              marginTop: '8px',
            }}
          >
            ({products.length} Results)
          </p>
        )}
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 18rem)',
            justifyContent: 'space-between',
            rowGap: '50px',
            padding: '0 7%',
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
      )}
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
