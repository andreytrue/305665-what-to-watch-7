import React from 'react';
import GuestHeader from '../headers/guest-header';
import UserHeader from '../headers/user-header';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { userIsAuth } from '../../utils/common';

function NotFoundScreen() {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <div className="user-page">
      {userIsAuth(authorizationStatus)
        ? <UserHeader />
        : <GuestHeader />}

      <h1 className="page-title user-page__title">404 NOT FOUND</h1>
    </div>
  );
}

export default NotFoundScreen;
