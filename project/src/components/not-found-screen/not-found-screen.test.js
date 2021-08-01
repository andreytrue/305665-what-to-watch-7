import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFoundScreen from './not-found-screen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore({});
const authorizationStatus = 'AUTH';

describe('Component: NotFoundScreen', () => {
  const state = {
    USER: authorizationStatus,
  };

  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store={mockStore(state)}>
        <Router history={history}>
          <NotFoundScreen />
        </Router>
      </Provider>,
    );

    const headerElement = getByText('404 NOT FOUND');

    expect(headerElement).toBeInTheDocument();
  });
});
