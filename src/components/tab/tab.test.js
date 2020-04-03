import React from 'react';
import renderer from 'react-test-renderer';

import Tab from './tab.jsx';

it(`Render correctly <Tabs>`, () => {
  const tree = renderer
    .create(<Tab name={`test tab`}><span>Tab children</span></Tab>).toJSON();

  expect(tree).toMatchSnapshot();
});

