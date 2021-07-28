import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Login from './login';

const mockStore = configureStore({});

describe('Component: Login', () => {
  it('should render "Login" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Login />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('login'), 'andrey');
    userEvent.type(screen.getByTestId('password'), '112358');

    expect(screen.getByDisplayValue(/andrey/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/112358/i)).toBeInTheDocument();
  });
});
