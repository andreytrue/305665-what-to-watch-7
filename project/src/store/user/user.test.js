import { ActionType } from '../action';
import { user } from './user';
import { AuthorizationStatus } from '../../utils/const';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({authorizationStatus: AuthorizationStatus.UNKNOWN});
  });

  it('should update authorization status to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const requireAuthorization = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requireAuthorization))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });

  it('should update authorization status to "NO_AUTH', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const requireAuthorization = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, requireAuthorization))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});
  });
});
