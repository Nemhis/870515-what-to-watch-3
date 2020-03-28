import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tabs from './tabs';

Enzyme.configure({
  adapter: new Adapter(),
});

const tabs = [
  {name: `TAB 1`},
  {name: `TAB 2`},
  {name: `TAB 3`},
];

describe(`<Tabs> e2e tests`, () => {
  it(`Active tab should correctly switch`, () => {
    const tabsWrapper = shallow(<Tabs tabs={tabs} onTabClick={() => {}} activeTabIndex={0}/>);

    const firstTabItem = tabsWrapper.find(`.movie-nav__item`).at(0);
    expect(firstTabItem.hasClass(`movie-nav__item--active`)).toBe(true);

    tabsWrapper.setProps({activeTabIndex: 1});

    const secondTabItem = tabsWrapper.find(`.movie-nav__item`).at(1);
    expect(secondTabItem.hasClass(`movie-nav__item--active`)).toBe(true);
  });

  it(`Click on tab should pass correct tab index`, () => {
    const onTabClick = jest.fn((...args) => [...args]);
    const tabsWrapper = mount(<Tabs tabs={tabs} onTabClick={onTabClick} activeTabIndex={0}/>);

    tabsWrapper
      .find(`.movie-nav__item .movie-nav__link`)
      .at(1)
      .simulate(`click`);

    const calledTabIndex = onTabClick.mock.calls[0][0];

    expect(calledTabIndex).toBe(1);
  });
});
