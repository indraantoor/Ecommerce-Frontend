import { BACKEND_API_CONSTANTS } from '@/common/core/constants/Api/backendApi.constants';
import { publicRequest } from '@/common/services/axios/axios.service';
import { useQuery } from '@tanstack/react-query';

const fetchCategories = () => {
  return publicRequest.get(BACKEND_API_CONSTANTS.CATEGORIES);
};

export const useCategories = () => {
  return useQuery(['categories'], fetchCategories, {
    select: (responseData: any) => {
      const categoriesList = responseData?.data;
      return categoriesList;
    },
  });
};
