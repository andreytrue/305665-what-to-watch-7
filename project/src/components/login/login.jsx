import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../logo/logo';
import Footer from '../footer/footer';
import { login } from '../../store/api-actions';
import { Redirect } from 'react-router-dom';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { userIsAuth } from '../../utils/common';
import { AppRoute } from '../../utils/const';

function Login() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const loginRef = useRef();
  const passwordRef = useRef();

  const [defaultNotify, setDefaultNotify] = useState(false);
  const [spacesNotify, setSpacesNotify] = useState(false);

  const dispatch = useDispatch();

  if (userIsAuth(authorizationStatus)) {
    <Redirect to={AppRoute.MAIN} />;
  }

  const onSubmit = (authorizationData) => dispatch(login(authorizationData));

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    setSpacesNotify(false);
    setDefaultNotify(false);

    const isPasswordValidityLength = (passwordRef.current.textLength !== 0);
    const isPasswordWithoutSpaces = (passwordRef.current.value.trim().length > 0);

    const isLoginValidity = (loginRef.current.textLength !== 0);
    const isPasswordValidity = (isPasswordValidityLength && isPasswordWithoutSpaces);

    if (isLoginValidity && isPasswordValidity) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    } else {
      if (isLoginValidity && !isPasswordWithoutSpaces) {
        setSpacesNotify(true);
      } else {
        setDefaultNotify(true);
      }
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action=""
          className="sign-in__form"
          onSubmit={ handleFormSubmit }
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={ loginRef }
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                data-testid="login"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={ passwordRef }
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                data-testid="password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>

            {defaultNotify
              ? <p style={{color: 'red'}}>Ошибка. Внесите изменения в данные для авторизации</p>
              : ''}

            {spacesNotify
              ? <p style={{color: 'red'}}>Пароль не может быть пустым или состоять только из пробелов</p>
              : ''}

          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
