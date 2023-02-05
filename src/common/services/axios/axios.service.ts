import { BACKEND_API_CONSTANTS } from '@/common/core/constants/Api/backendApi.constants';
import axios from 'axios';

export const publicRequest = axios.create({
  baseURL: BACKEND_API_CONSTANTS.BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});
