import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const film = {
  name: 'The Grand Budapest Hotel',
  type: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      film={film}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
