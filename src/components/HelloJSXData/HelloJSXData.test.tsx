import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HelloJsxData from './HelloJsxData';

describe('<HelloJsxData />', () => {
  test('it should mount', () => {
    render(<HelloJsxData />);
    
    const helloJsxData = screen.getByTestId('HelloJsxData');

    expect(helloJsxData).toBeInTheDocument();
  });
});