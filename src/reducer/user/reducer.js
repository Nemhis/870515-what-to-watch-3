import {AuthorizationStatus} from '../../const';
import {ActionType} from './actions';
import {extend} from '../../utils';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const reducer = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      newState = {
        authorizationStatus: action.payload
      };
      break;
  }

  if (newState) {
    state = extend(state, newState);
  }

  return state;
};

export {reducer};

