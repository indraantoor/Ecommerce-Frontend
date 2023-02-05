import { BACKEND_API_CONSTANTS } from '@/common/core/constants/Api/backendApi.constants';
import { publicRequest } from '@/common/services/axios/axios.service';
import { useQuery } from '@tanstack/react-query';

const fetchProducts = (category: string) => {
  if (category) {
    return publicRequest.get(BACKEND_API_CONSTANTS.CATEGORY + `/${category}`);
  }
  return publicRequest.get(BACKEND_API_CONSTANTS.PRODUCTS);
};

export const useProductsListings = (category = '') => {
  return useQuery(['products', category], () => fetchProducts(category), {
    select: (responseData: any) => {
      const productsList = responseData?.data;
      return productsList;
    },
  });
};
