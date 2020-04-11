import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ShowMoreButton} from './show-more-button.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`<ShowMoreButton> e2e tests`, () => {
  it(`On click should pass correct value`, () => {
    const onClick = jest.fn((...args) => args);
    const showMoreButtonWrapper = shallow(
        <ShowMoreButton
          isVisible={true}
          onClick={onClick}
          shownMoviesCount={8}
        />
    );

    showMoreButtonWrapper
      .find(`.catalog__button`)
      .at(0)
      .simulate(`click`);

    expect(onClick.mock.calls[0][0]).toBe(16);
  });
});
