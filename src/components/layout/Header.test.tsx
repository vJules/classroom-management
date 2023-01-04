import React from 'react';
import { screen } from '@testing-library/react';
import Header from './Header';
import { renderWithRouter } from '../../utils/test';

describe('Header', () => {
  it('should render the app logo', () => {
    renderWithRouter(<Header />);
    const logoElement = screen.getByTestId('logo-svg');
    expect(logoElement).toBeVisible;
    expect(logoElement).toHaveAttribute('src');
  });

  it('should render user avatar', () => {
    renderWithRouter(<Header />);
    const avatarElement = screen.getByTestId('avatar-svg');
    expect(avatarElement).toBeVisible;
    expect(avatarElement).toHaveAttribute('src');
  });
});
