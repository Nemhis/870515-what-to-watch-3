import {reducer} from './reducer.js';
import {ActionType} from './actions';
import {AuthorizationStatus} from '../../const';


describe(`Reducer tests`, () => {
  it(`Default store state`, () => {
    expect(reducer(void 0, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      });
  });

  it(`Load films correctly work`, () => {
    expect(reducer(void 0, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    }))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
      });
  });
});
