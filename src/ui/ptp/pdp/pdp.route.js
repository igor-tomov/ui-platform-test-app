export default ({ router }) => {
  /* GET users listing. */
  router.get('/', function(req, res) {
    let { $app } = res;

    $app.store.dispatch({ type: 'PDP_SET_STATE', payload: { initialised: true }});
    $app.store.dispatch({ type: 'PDP_TITLE', payload: { title: 'Sample product' }});

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
};
