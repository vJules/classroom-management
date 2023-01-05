import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TextInput, { TextInputProps } from './TextInput';

const defaultProps = {
  label: 'Test Label',
  id: 'TestId',
  value: 'Test Text',
  onChange: jest.fn(),
  onKeyPress: jest.fn(),
};

function renderTextInput(props: TextInputProps) {
  return render(<TextInput {...props} />);
}

describe('Modal', () => {
  it('should render the label with the label prop', () => {
    renderTextInput({ ...defaultProps });
    expect(screen.getByText(defaultProps.label)).toBeDefined;
  });

  it('should set the id prop as the "for" attribute on the label', () => {
    renderTextInput({ ...defaultProps });
    const label = screen.getByText(defaultProps.label);
    expect(label.getAttribute('for')).toBe(defaultProps.id);
  });

  it('should set the id prop as the "name" and "id" attributes on the input', () => {
    renderTextInput({ ...defaultProps });
    const input = screen.getByRole('input');
    expect(input.getAttribute('id')).toBe(defaultProps.id);
    expect(input.getAttribute('name')).toBe(defaultProps.id);
  });

  it('should call the "onChange" prop', () => {
    const mockOnChange = jest.fn();
    renderTextInput({ ...defaultProps, onChange: mockOnChange });
    const input = screen.getByRole('input');
    fireEvent.change(input, { target: { value: 'New value' } });
    expect(mockOnChange).toBeCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('New value');
  });
});
