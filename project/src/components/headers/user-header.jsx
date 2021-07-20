import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../src/const';
import { ActionCreator } from '../../store/action';

function UserHeader(props) {

  const { onSignOutClick } = props;

  return (
    <header className="page-header film-card__head">
      <Logo />

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link
            className="user-block__link"
            to={AppRoute.MAIN}
            onClick={ onSignOutClick }
          >
            Sign out
          </Link>
        </li>
      </ul>
    </header>
  );
}

UserHeader.propTypes = {
  onSignOutClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSignOutClick() {
    dispatch(ActionCreator.logout());
  },
});

export {UserHeader};
export default connect(null, mapDispatchToProps)(UserHeader);
