import { PdpPageContainer } from './components/pdp-page/pdp-page';
import reducers from './reducers';
import epics from './epics';
import { productDataServiceFactory } from './services/ProductDataService';
import './components/pdp-page/style.scss';

export default {
  name: 'pdp',
  reducers,
  epics,
  resources: {
    productDataService: productDataServiceFactory,
  },
  render: { component: PdpPageContainer, id: 'root'},
  fetch: () => {

  }
};
