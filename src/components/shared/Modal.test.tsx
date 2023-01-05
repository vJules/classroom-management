import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal, { ModalProps } from './Modal';

const defaultProps = {
  headline: 'Test Headline',
  isVisible: true,
  onClose: jest.fn(),
  children: <p>Test content</p>,
};

function renderModal(props: ModalProps) {
  return render(<Modal {...props}></Modal>);
}

describe('Modal', () => {
  it('should not be rendered if the isVisible prop is false', () => {
    renderModal({ ...defaultProps, isVisible: false });
    expect(screen.queryByTestId('modal')).toBeFalsy();
  });

  it('should be rendered if the isVisible prop is true', () => {
    renderModal(defaultProps);
    expect(screen.getByTestId('modal')).toBeTruthy();
  });

  it('should render the prop children in the modal body', () => {
    renderModal(defaultProps);
    expect(screen.getByTestId('modal-body')?.textContent).toBe('Test content');
  });

  it('should call the onClose prop when click on the close icon', () => {
    const mockCloseFunction = jest.fn();
    renderModal({ ...defaultProps, onClose: mockCloseFunction });
    const modalClose = screen.getByTestId('modal-close');
    modalClose.click();
    expect(mockCloseFunction).toBeCalledTimes(1);
  });
});
