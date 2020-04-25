import {ActionType, ActionCreator} from './actions';
import {AuthorizationStatus} from '../../const';

describe(`Action creators work correctly`, () => {
  it(`Require authorization correctly change status to AUTH`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
      .toEqual({
        type: ActionType.REQUIRE_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
  });

  it(`Require authorization correctly change status to NO_AUTH`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
      .toEqual({
        type: ActionType.REQUIRE_AUTHORIZATION,
        payload: AuthorizationStatus.NO_AUTH,
      });
  });
});
