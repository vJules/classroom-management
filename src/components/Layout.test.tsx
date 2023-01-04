import React from 'react';
import { screen } from '@testing-library/react';
import Layout from './Layout';
import { renderWithRouter } from '../utils/test';

describe('Navigation', () => {
  it('should render the navigation', () => {
    renderWithRouter(<Layout />);
    expect(screen.getByRole('navigation')).toBeTruthy;
  });

  it('should render the header', () => {
    renderWithRouter(<Layout />);
    expect(screen.getByTestId('header')).toBeTruthy;
  });

  it('should render the content from an outlet inside main', () => {
    renderWithRouter(<Layout />);
    expect(screen.getByRole('main')).toBeTruthy;
  });
});
