import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import PropTypes from 'prop-types';

function App(props) {
  const {film} = props;

  return (
    <WelcomeScreen film={film} />
  );
}

App.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
};

export default App;
