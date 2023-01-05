import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('should render descriptive text when the classrooms prop is an empty list', () => {
    render(
      <Modal
        headline='Modal Headline'
        isVisible={false}
        onClose={() => {
          jest.fn();
        }}
      >
        <p>Hello</p>
      </Modal>,
    );
    const emptyListElement = screen.getByTestId('modal');
    expect(emptyListElement).toBeTruthy();
  });
});
