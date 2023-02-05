import { useAppContext } from '@/state/context/app-context';
import LoadingSpinner from '../LoadingSpinner';
import ProductCard from '../ProductCard';
import { useProductsListings } from './hooks/useProductsListings.hook';
import { ProductListingsContainer } from './styles/ProductsListingsLayout.style';
export const ProductListingsComponent = () => {
  const context = useAppContext();
  const { searchText, category } = context?.state;
  const { data: products, isLoading } = useProductsListings(category);

  return (
    <ProductListingsContainer>
      <div
        style={{
          marginBottom: isLoading ? '5px' : '50px',
        }}
        className="headingContainer"
      >
        <h2>Man & Woman Fashion</h2>
        {!isLoading && (
          <p>
            (
            {
              products?.filter((product: any) =>
                filterBySearchText(product, searchText)
              ).length
            }{' '}
            Results)
          </p>
        )}
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="listingsContainer">
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
    </ProductListingsContainer>
  );
};

function filterBySearchText(product: any, searchText: string) {
  if (searchText) {
    return product?.title?.toLowerCase()?.includes(searchText?.toLowerCase());
  } else {
    return product;
  }
}
