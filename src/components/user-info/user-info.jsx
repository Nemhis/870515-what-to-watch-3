import React from 'react';
import PropTypes from 'prop-types';

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

export default UserInfo;
