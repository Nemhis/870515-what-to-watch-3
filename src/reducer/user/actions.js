import {AuthorizationStatus} from '../../const';
import User from '../../adapter/user';

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOAD_USER_INFO: `LOAD_USER_INFO`,
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    }).then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.loadUserInfo(data));
    });
  },
};

const ActionCreator = {
  requireAuthorization(status) {
    return {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: status,
    };
  },

  loadUserInfo(userInfo) {
    return {
      type: ActionType.LOAD_USER_INFO,
      payload: User.fromRaw(userInfo),
    };
  }
};

export {ActionType, ActionCreator, Operation};
