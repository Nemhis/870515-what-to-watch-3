import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withActiveItem from './with-active-item';

Enzyme.configure({
  adapter: new Adapter(),
});

const TestComponent = ({activeItemIndex, onItemSelect}) => {
  const items = [`test 1`, `test 2`, `tes 3`];

  return (
    <div>
      <span>current active item - {activeItemIndex} </span>
      {items.map((item, index) => (
        <button key={index} type="button" onClick={onItemSelect(index)}>
          {item}
        </button>
      ))}
    </div>
  );
};

TestComponent.propTypes = {
  activeItemIndex: PropTypes.number.isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

const TestComponentWrapped = withActiveItem(TestComponent, 0);


it(`Film name should be pressed`, () => {
  const withActiveItemComponent = shallow(<TestComponentWrapped />);

  expect(withActiveItemComponent.props().activeItemIndex).toBe(0);

  withActiveItemComponent.props().onItemSelect(2);

  expect(withActiveItemComponent.props().activeItemIndex).toBe(2);
});
