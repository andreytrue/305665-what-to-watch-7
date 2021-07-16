import React from 'react';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../src/const';

function GuestHeader() {
  return(
    <header className="page-header">
      <Logo />

      <div className="user-block">
        <Link className="user-block__link" to={AppRoute.LOGIN}>Sign in</Link>
      </div>
    </header>
  );
}

export default GuestHeader;
