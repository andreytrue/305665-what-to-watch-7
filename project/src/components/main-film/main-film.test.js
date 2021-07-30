import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

import { films } from '../../mocks/films';
import { selectedFilmAdapter } from '../../utils/adapter';
import { AuthorizationStatus } from '../../utils/const';
import MainFilm from './main-film';

const mockStore = configureStore({});
const mainFilm = selectedFilmAdapter(films[0]);
const authorizationStatus = AuthorizationStatus.AUTH;
describe('Component: MainFilm', () => {
  it('should render correctly', () => {
    const state = {
      USER: authorizationStatus,
    };

    const history = createMemoryHistory();

    const { getByText } = render(
      <Provider store={mockStore(state)}>
        <Router history={history}>
          <MainFilm
            authorizationStatus={authorizationStatus}
            mainFilm={mainFilm}
          />
        </Router>
      </Provider>,
    );

    const titleElement = getByText(`${mainFilm.name}`);
    expect(titleElement).toBeInTheDocument();

    const genreElement = getByText(`${mainFilm.genre}`);
    expect(genreElement).toBeInTheDocument();

    const releaseDateElement = getByText(`${mainFilm.released}`);
    expect(releaseDateElement).toBeInTheDocument();
  });
});
