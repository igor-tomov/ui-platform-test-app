import React from 'react';
import { PdpPage } from './pdp-page';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<PdpPage title="Hello bitches!!" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
