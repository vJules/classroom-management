import React from 'react';
import { screen } from '@testing-library/react';
import Navigation from './Navigation';
import { renderWithRouter } from '../../utils/test';

const links = [
  { title: 'Classrooms', path: '/' },
  { title: 'About', path: '/about' },
];

describe('Navigation', () => {
  it('should render as a nav-tag', () => {
    renderWithRouter(<Navigation links={links} />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeTruthy();
    expect(nav.tagName).toBe('NAV');
  });

  it('should render the links prop as items in an unordered list', () => {
    renderWithRouter(<Navigation links={links} />);
    const navList = screen.getByTestId('nav-list');
    const navItems = screen.getAllByTestId('nav-item-link');
    expect(navList.tagName).toBe('UL');
    expect(navItems[0].textContent).toBe(links[0].title);
    expect(navItems[1].textContent).toBe(links[1].title);
  });

  it('should highlight the currently active route', () => {
    renderWithRouter(<Navigation links={links} />);
    const navItem = screen.getAllByTestId('nav-item-link');
    expect(navItem[0]).toHaveClass('navigation-link--active');
  });
});
