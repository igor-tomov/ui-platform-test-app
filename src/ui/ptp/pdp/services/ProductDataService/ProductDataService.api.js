import { BaseApiService } from 'ui-platform-core/dist/lib/base-data-service';



export class ProductApiService extends BaseApiService {

  fetchSampleProduct() {
    return this.apiAdapter.request({
      url: '/ptp/pdp/sample',
      method: 'GET',
    }).then(({ data }) => data);
  }



  fetchJavascriptNews() {
    return this.apiAdapter.request({
      url: 'https://www.reddit.com/r/javascript.json',
      method: 'GET',
    }).then(({ data }) => data);
  }
}
