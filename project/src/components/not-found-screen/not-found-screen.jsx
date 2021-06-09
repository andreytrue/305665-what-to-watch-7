import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

function NotFoundScreen() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <Link className="page-title user-page__title" to="/">Вернуться на главную</Link>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" href="/">Sign out</a>
          </li>
        </ul>
      </header>

      <h1 className="page-title user-page__title">404 NOT FOUND</h1>
    </div>
  );
}

export default NotFoundScreen;
