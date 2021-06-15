import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import reviews from './mocks/reviews';
import videoUrl from './mocks/player';

ReactDOM.render(
  <React.StrictMode>
    <App
      videoUrl={videoUrl}
      films={films}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
