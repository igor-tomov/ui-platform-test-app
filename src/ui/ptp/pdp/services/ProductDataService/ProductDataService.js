import { BaseDataService } from 'ui-platform-core/dist/lib/base-data-service';



export class ProductDataService extends BaseDataService {

  fetchSampleProduct() {
    return this.api.fetchSampleProduct().then(res => {
      if (res && res.product) {
        return res.product;
      }

      return Promise.reject(new Error('Invalid response payload'));
    });
  }
}
