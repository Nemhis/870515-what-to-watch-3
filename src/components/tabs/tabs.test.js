import React from 'react';
import renderer from 'react-test-renderer';

import Tabs from './tabs.jsx';

const tabs = [
  {name: `TAB 1`},
  {name: `TAB 2`},
  {name: `TAB 3`},
];

it(`Render correctly <Tabs>`, () => {
  const tree = renderer
    .create(<Tabs tabs={tabs} onTabClick={() => {}} activeTabIndex={0}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

