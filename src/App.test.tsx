import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './utils/test';
import App from './App';

test('renders the classroom overview component on the index route', () => {
  window.history.pushState({}, 'About test page', '/');

  renderWithRouter(<App />);
  const classroomsHeadline = screen.getByText(/Classrooms page/i);
  expect(classroomsHeadline).toBeInTheDocument();
});

test('renders the about component on the /about route', () => {
  renderWithRouter(<App />, { route: '/about' });
  const aboutHeadline = screen.getByText(/About page/i);
  expect(aboutHeadline).toBeInTheDocument();
});

test('renders the classroom overview page', () => {
  renderWithRouter(<App />, { route: '/some/not/found/route' });
  const notFoundHeadline = screen.getByText(/Not found/i);
  expect(notFoundHeadline).toBeInTheDocument();
});
