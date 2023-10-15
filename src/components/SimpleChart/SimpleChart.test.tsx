import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SimpleChart from './SimpleChart';

describe('<SimpleChart />', () => {
  test('it should mount', () => {
    render(<SimpleChart />);
    
    const simpleChart = screen.getByTestId('SimpleChart');

    expect(simpleChart).toBeInTheDocument();
  });
});