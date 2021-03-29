import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

describe('<Button />', () => {
  function setup(text, props = {}) {
    const { container, getByText } = render(
      <Button {...props}>
        {text}
      </Button>

    );
    const button = container.firstChild;
    return { button, container, getByText };
  }
  test('render normal', () => {
    const { button, container, getByText } = setup('Boton', {});

    expect(button.classList.contains('button')).toBe(true);
    expect(getByText('Boton')).toBeInTheDocument();
  });

  test('render de tipo "primary"', () => {
    const { button, container, getByText } = setup('Primary', { 'primary' });

    expect(button.classList.contains('button__primary')).toBe(true);
    expect(getByText('Primary')).toBeInTheDocument();
  });

  test('render de tipo "secondary"', () => {
    const { button, container, getByText } = setup('Secondary', { 'secondary' });


    expect(button.classList.contains('button__secondary')).toBe(true);
    expect(getByText('Secondary')).toBeInTheDocument();
  });

  test('render con atributo "disabled"', () => {
    const { button, container, getByText } = setup('Deshabilitado', { disabled: true });


    expect(button.hasAttribute('disabled')).toBe(true);
    expect(button).toHaveClass('button');
    expect(getByText('Deshabilitado')).toBeInTheDocument();
  });
});