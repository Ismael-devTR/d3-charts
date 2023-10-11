import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HelloSvg from './HelloSvg';

describe('<HelloSvg />', () => {
  test('it should mount', () => {
    render(<HelloSvg />);
    
    const helloSvg = screen.getByTestId('HelloSvg');

    expect(helloSvg).toBeInTheDocument();
  });
});