import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import Logo from './logo';

describe('Component: Logo', () => {
  const history = createMemoryHistory();
  it('should render correctly', () => {
    const { getByText } = render(
      <Router history={history}>
        <Logo />
      </Router>,
    );

    const logoLetterT = getByText('T');
    expect(logoLetterT).toBeInTheDocument();
  });
});
