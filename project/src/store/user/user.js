import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../components/src/const';
import { login } from '../api-actions';
import { requireAuthorization, submitLogout, submitLogin} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(submitLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(submitLogin, (_, action) => {
      login(action.payload);
    });
});

export {user};
