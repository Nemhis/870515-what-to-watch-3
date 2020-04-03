import React from 'react';
import renderer from 'react-test-renderer';

import Tabs from './tabs.jsx';
import Tab from '../tab/tab.jsx';

const tabs = [
  `TAB 1`,
  `TAB 2`,
  `TAB 3`,
];

it(`Render correctly <Tabs>`, () => {
  const tree = renderer
    .create(
        <Tabs onActiveItemChange={() => {}} activeItemIndex={0}>
          <Tab name={tabs[0]}><span>{tabs[0]}</span></Tab>
          <Tab name={tabs[1]}><span>{tabs[1]}</span></Tab>
          <Tab name={tabs[2]}><span>{tabs[2]}</span></Tab>
        </Tabs>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

