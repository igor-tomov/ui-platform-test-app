import { PdpPageContainer } from './components/pdp-page/pdp-page';
import reducers from './reducers';
import epics from './epics';
import './components/pdp-page/style.scss';

export default {
  name: 'pdp',
  reducers,
  epics,
  resources: {

  },
  render: { component: PdpPageContainer, id: 'root'},
  fetch: () => {

  }
};
