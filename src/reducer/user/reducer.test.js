import {reducer} from './reducer.js';
import {ActionType} from './actions';
import {AuthorizationStatus} from '../../const';


describe(`Reducer tests`, () => {
  it(`Default store state`, () => {
    expect(reducer(void 0, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: null,
      });
  });

  it(`Require auth correctly work`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    }))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
      });
  });

  it(`Load user info correctly work`, () => {
    expect(reducer({
      user: null,
    }, {
      type: ActionType.LOAD_USER_INFO,
      payload: {id: 1, email: `test@mail.ru`}
    }))
      .toEqual({
        user: {id: 1, email: `test@mail.ru`},
      });
  });
});
