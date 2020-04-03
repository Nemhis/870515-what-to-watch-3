import React, {PureComponent} from 'react';

const withActiveItem = (Component, startItemIndex) => {
  class WithVideoPreview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItemIndex: startItemIndex,
      };

      this._onItemSelect = this._onItemSelect.bind(this);
    }

    _onItemSelect(activeItemIndex) {
      this.setState({activeItemIndex});
    }

    render() {
      const {activeItemIndex} = this.state;

      return <Component
        {...this.props}
        onActiveItemChange={this._onItemSelect}
        activeItemIndex={activeItemIndex}
      />;
    }
  }

  WithVideoPreview.propTypes = {};

  return WithVideoPreview;
};

export default withActiveItem;
