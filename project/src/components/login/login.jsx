import React, {useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../logo/logo';
import Footer from '../footer/footer';
import { login } from '../../store/api-actions';
import { useHistory } from 'react-router-dom';
import { requireAuthorization } from '../../store/action';
import { AuthorizationStatus } from '../../utils/const';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { userIsAuth } from '../../utils/common';

function Login() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const loginRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token || userIsAuth(authorizationStatus)) {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      history.push('/');
    } else if (!token && !userIsAuth(authorizationStatus)) {
      history.push('/login');
    }
  }, [dispatch, history, authorizationStatus]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (passwordRef.current.value.trim().length > 0) {
      dispatch(login({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
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
          onSubmit={ handleSubmit }
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
