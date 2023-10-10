import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HelloD3 from './HelloD3';

describe('<HelloD3 />', () => {
  test('it should mount', () => {
    render(<HelloD3 />);
    
    const helloD3 = screen.getByTestId('HelloD3');
    //@ts-expect-error
    expect(helloD3).toBeInTheDocument();
  });
});