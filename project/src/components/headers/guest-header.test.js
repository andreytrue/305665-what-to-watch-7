import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import GuestHeader from './guest-header';

describe('Component: GuestHeader', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <GuestHeader />
      </Router>,
    );

    const headerElement = getByText('Sign in');
    expect(headerElement).toBeInTheDocument();
  });
});
