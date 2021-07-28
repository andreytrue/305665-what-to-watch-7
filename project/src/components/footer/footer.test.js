import React from 'react';
import { render } from '@testing-library/react';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <Footer />,
    );

    const copyrightText = getByText('© 2019 What to watch Ltd.');
    expect(copyrightText).toBeInTheDocument();
  });
});
