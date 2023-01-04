import React from 'react';
import { render, screen } from '@testing-library/react';
import ClassroomList from './ClassroomList';
import { renderWithRouter } from '../utils/test';

const classrooms = [
  {
    name: 'Room 53',
    id: 1,
    teacher: { name: 'Henrik' },
    subjects: ['English', 'Math', 'German'],
    students: [{ name: 'Lars' }],
  },
];

const additionalClassrooom = {
  name: 'Room 12',
  id: 2,
  teacher: { name: 'Louise' },
  subjects: ['English'],
  students: [{ name: 'Peter' }],
};

describe('ClassroomList', () => {
  it('should render descriptive text when the classrooms prop is an empty list', () => {
    renderWithRouter(<ClassroomList classrooms={[]} />);
    const emptyListElement = screen.getByTestId('empty-classroom-list');
    expect(emptyListElement).toBeTruthy();
    expect(emptyListElement.textContent).toBe('classroomList.emptyList');
  });

  it('should render the list of classrooms when the classrooms prop is not empty', () => {
    renderWithRouter(<ClassroomList classrooms={classrooms} />);
    const listElement = screen.getByTestId('classroom-list');
    expect(listElement).toBeTruthy();
  });

  it('should render a classroom list item component for each classroom', () => {
    const { rerender } = renderWithRouter(<ClassroomList classrooms={classrooms} />);
    const listElements = screen.getAllByTestId('classroom-list-item');
    expect(listElements.length).toBe(1);
    rerender(<ClassroomList classrooms={[...classrooms, additionalClassrooom]} />);
    const updatedListElements = screen.getAllByTestId('classroom-list-item');
    expect(updatedListElements.length).toBe(2);
  });
});
