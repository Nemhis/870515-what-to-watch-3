import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getUser} from '../../reducer/user/selector';

const UserInfo = ({user}) => (
  <div className="user-block">
    {user ?
      <div className="user-block__avatar">
        <img src={user.avatarUrl} alt="User avatar" width="63" height="63"/>
      </div>
      :
      <a href="/sign-in-page" className="user-block__link">Sign in</a>
    }
  </div>
);

UserInfo.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
  })
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export {UserInfo};
export default connect(mapStateToProps)(UserInfo);
