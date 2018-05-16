import { PDP_SET_PRODUCT_ID, fillJavascriptNews, failJavascriptNews } from './actions';



export default ({ router }) => {

  router.get('/sample', (req, res) => {
    res.json({
      product: {
        id: '123ah3b',
        title: 'Sample product'
      }
    });
  });



  /* GET users listing. */
  router.get('/:productId', function(req, res) {
    let { $app } = res;

    $app.store.dispatch({ type: PDP_SET_PRODUCT_ID, payload: { productId: req.params.productId }});

    // take data service from IoC in order to make fetch specific data
    const productDataService = $app.ioc.resolve('productDataService');

    productDataService.fetchJavascriptNews()
      // update store according to request result (success or failure)
      .then(
        (data) => $app.store.dispatch(fillJavascriptNews(data)),
        (err) => $app.store.dispatch(failJavascriptNews(err))
      )
      // finally, render our app with ready update store
      .then(() => {
        res.renderApp({
          title: 'Product page',
          metaTags: [
            {
              name: 'version',
              content: '0.0.1',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            }
          ]
        });
      });
  });
};
