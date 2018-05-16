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



  fetchJavascriptNews() {
    return this.api
      .fetchJavascriptNews()
      .then((res) => {
        if (! res || ! res.data || ! res.data.children) {
          return Promise.reject(new Error('Invalid response payload'));
        }

        return res.data.children.map(({ data }) => ({
          url: data.url,
          title: data.title,
        }));
      });
  }
}
