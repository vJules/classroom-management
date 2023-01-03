import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders the classroom overview component on the index route', () => {
  window.history.pushState({}, 'About test page', '/');

  render(<App />, { wrapper: BrowserRouter });
  const classroomsHeadline = screen.getByText(/Classrooms/i);
  expect(classroomsHeadline).toBeInTheDocument();
});

test('renders the about component on the /about route', () => {
  window.history.pushState({}, 'About test page', '/about');

  render(<App />, { wrapper: BrowserRouter });
  const aboutHeadline = screen.getByText(/About page/i);
  expect(aboutHeadline).toBeInTheDocument();
});

test('renders the classroom overview page', () => {
  window.history.pushState({}, 'Not found test page', '/some/not/found/route');

  render(<App />, { wrapper: BrowserRouter });
  const notFoundHeadline = screen.getByText(/Not found/i);
  expect(notFoundHeadline).toBeInTheDocument();
});
