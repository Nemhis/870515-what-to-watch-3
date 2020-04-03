import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tabs from './tabs';
import Tab from '../tab/tab';

Enzyme.configure({
  adapter: new Adapter(),
});

const tabs = [
  `TAB 1`,
  `TAB 2`,
  `TAB 3`,
];

describe(`<Tabs> e2e tests`, () => {
  it(`Active tab should correctly switch`, () => {
    const tabsWrapper = shallow(
        <Tabs onActiveItemChange={() => {}} activeItemIndex={0}>
          <Tab name={tabs[0]}><span>{tabs[0]}</span></Tab>
          <Tab name={tabs[1]}><span>{tabs[1]}</span></Tab>
          <Tab name={tabs[2]}><span>{tabs[2]}</span></Tab>
        </Tabs>
    );

    const firstTabItem = tabsWrapper.find(`.movie-nav__item`).at(0);
    expect(firstTabItem.hasClass(`movie-nav__item--active`)).toBe(true);

    tabsWrapper.setProps({activeItemIndex: 1});

    const secondTabItem = tabsWrapper.find(`.movie-nav__item`).at(1);
    expect(secondTabItem.hasClass(`movie-nav__item--active`)).toBe(true);
  });

  it(`Click on tab should pass correct tab index`, () => {
    const onTabClick = jest.fn((...args) => [...args]);
    const tabsWrapper = mount(
        <Tabs onActiveItemChange={onTabClick} activeItemIndex={0}>
          <Tab name={tabs[0]}><span>{tabs[0]}</span></Tab>
          <Tab name={tabs[1]}><span>{tabs[1]}</span></Tab>
          <Tab name={tabs[2]}><span>{tabs[2]}</span></Tab>
        </Tabs>
    );

    tabsWrapper
      .find(`.movie-nav__item .movie-nav__link`)
      .at(1)
      .simulate(`click`);

    const calledTabIndex = onTabClick.mock.calls[0][0];

    expect(calledTabIndex).toBe(1);
  });
});
