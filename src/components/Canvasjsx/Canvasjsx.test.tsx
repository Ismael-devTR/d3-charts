import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Canvasjsx from './Canvasjsx';

describe('<Canvasjsx />', () => {
  test('it should mount', () => {
    render(<Canvasjsx />);
    
    const canvasjsx = screen.getByTestId('Canvasjsx');

    expect(canvasjsx).toBeInTheDocument();
  });
});