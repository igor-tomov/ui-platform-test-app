import { PdpPageContainer } from './components/ptc-page/ptc-page.container';
import reducers from './reducers';
import epics from './epics';
import CartModule from './modules/cart';
import OrderModule from './modules/order';

export default {
  dependsOn: [CartModule, OrderModule],
  name: 'ptc',
  reducers,
  epics,
  resources: {

  },
  render: { component: PdpPageContainer, id: 'root'}
};
