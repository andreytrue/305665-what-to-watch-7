import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import reviews from './mocks/reviews';

const film = {
  name: 'The Grand Budapest Hotel',
  type: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      film={film}
      films={films}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
