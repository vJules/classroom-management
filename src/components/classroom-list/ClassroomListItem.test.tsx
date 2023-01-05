import React from 'react';
import { screen } from '@testing-library/react';
import ClassroomListItem from './ClassroomListItem';
import { renderWithRouter } from '../../utils/test';

const classrooom = {
  name: 'Room 12',
  id: '1',
  teacher: 'Louise',
  subjects: ['English'],
  students: ['Peter'],
};

function renderClassroom() {
  return renderWithRouter(<ClassroomListItem {...classrooom} />);
}

describe('ClassroomList', () => {
  it('should render a name for the classroom', () => {
    renderClassroom();
    expect(screen.getByText('Room 12')).toBeTruthy;
  });

  it('should show the number of students', () => {
    renderClassroom();
    expect(screen.getByText('classroomListItem.numberOfStudents')).toBeTruthy();
  });
});
