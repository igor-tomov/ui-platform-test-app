import { PdpPageContainer } from './components/pdp-page/pdp-page';
import reducers from './reducers';
import './components/pdp-page/style.scss';

export default {
  name: 'pdp',
  reducers,
  resources: {

  },
  render: { component: PdpPageContainer, id: 'root'},
  fetch: () => {

  }
};
