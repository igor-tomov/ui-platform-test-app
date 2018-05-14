import { ProductApiService } from './ProductDataService.api';
import { ProductDataService } from './ProductDataService';

export const productDataServiceFactory = ProductDataService.createFactory(ProductApiService);
