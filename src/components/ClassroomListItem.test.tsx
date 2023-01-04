import React from 'react';
import { screen } from '@testing-library/react';
import ClassroomListItem from './ClassroomListItem';
import { renderWithRouter } from '../utils/test';

const classrooom = {
  name: 'Room 12',
  id: 1,
  teacher: { name: 'Louise' },
  subjects: ['English'],
  students: [{ name: 'Peter' }],
};

describe('ClassroomList', () => {
  it('should render a name for the classroom', () => {
    renderWithRouter(<ClassroomListItem classroom={classrooom} />);
    expect(screen.getByText('Room 12')).toBeTruthy;
  });

  it('should show the number of students', () => {
    renderWithRouter(<ClassroomListItem classroom={classrooom} />);
    expect(screen.getByText('classroomListItem.numberOfStudents')).toBeTruthy();
  });
});
