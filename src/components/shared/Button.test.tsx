import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should display the pass text prop', () => {
    render(<Button text='Test' style='primary' type='submit' onClick={jest.fn()}></Button>);
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Test');
  });

  it('should add a class based on the style prop', () => {
    render(<Button text='Test' style='primary' type='submit' onClick={jest.fn()}></Button>);
    const button = screen.getByRole('button');
    expect(button.classList).toContain('button--primary');
  });

  it('should set the button type based on the type prop', () => {
    render(<Button text='Test' style='primary' type='submit' onClick={jest.fn()}></Button>);
    const button = screen.getByRole('button');
    expect(button.getAttribute('type')).toBe('submit');
  });

  it('should call the passed onClick function when clicked', () => {
    const mockFunction = jest.fn();
    render(<Button text='Test' style='primary' type='submit' onClick={mockFunction}></Button>);
    const button = screen.getByRole('button');
    button.click();
    expect(mockFunction).toBeCalledTimes(1);
  });
});
