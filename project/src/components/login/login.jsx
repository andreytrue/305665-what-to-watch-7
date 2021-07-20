import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Logo from '../logo/logo';
import Footer from '../footer/footer';
import { login } from '../../store/api-actions';

function Login({onSubmitLogin}) {
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmitLogin({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
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

Login.propTypes = {
  onSubmitLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitLogin(authData) {
    dispatch(login(authData));
  },
});

export { Login };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
