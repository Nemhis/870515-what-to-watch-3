import React, {PureComponent} from 'react';

const withErrorMessage = (Component) => {
  class WithErrorMessage extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        errorMessage: ``,
      };
    }

    render() {
      const {errorMessage} = this.state;

      return <Component
        {...this.props}
        errorMessage={errorMessage}
        setErrorMessage={(message) => {
          this.setState({errorMessage: message});
        }}
        unsetErrorMessage={() => {
          this.setState({errorMessage: ``});
        }}
      />;
    }
  }

  WithErrorMessage.propTypes = {};

  return WithErrorMessage;
};

export default withErrorMessage;
