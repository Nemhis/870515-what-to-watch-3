import React from 'react';
import renderer from 'react-test-renderer';

import Tabs from './tabs.jsx';

const tabs = [
  `TAB 1`,
  `TAB 2`,
  `TAB 3`,
];

it(`Render correctly <Tabs>`, () => {
  const tree = renderer
    .create(<Tabs tabs={tabs} onTabClick={() => {}} activeTabIndex={0}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

