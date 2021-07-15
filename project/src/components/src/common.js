import { AuthorizationStatus } from './const';

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

export const userIsAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.AUTH;
