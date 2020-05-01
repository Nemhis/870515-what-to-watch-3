import MockAdapter from 'axios-mock-adapter';

import {ActionType, ActionCreator, Operation} from './actions';
import {AuthorizationStatus} from '../../const';
import {createAPI} from '../../api';

const api = createAPI(() => {});

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

  it(`Should make a correct API call GET to /login on 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, true);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
      });
  });

  it(`Should make a correct API call GET to /login on 401`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(401, {faked: true});

    return expect(checkAuthLoader(dispatch, () => {}, api))
      .rejects
      .toThrow(`Request failed with status code 401`);
  });

  it(`Should make a correct API call POST to /login on 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = Operation.login({});

    apiMock
      .onGet(`/login`)
      .reply(200, true);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
      });
  });
});
