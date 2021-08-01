import React from 'react';
import { render } from '@testing-library/react';
import Footer from './footer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Component: Footer', () => {
  const history = createMemoryHistory();
  it('should render correctly', () => {
    const { getByText } = render(
      <Router history={history}>
        <Footer />
      </Router>,
    );

    const copyrightText = getByText('© 2019 What to watch Ltd.');
    expect(copyrightText).toBeInTheDocument();
  });
});
