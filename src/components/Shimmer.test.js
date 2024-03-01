import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Shimmer from './Shimmer';

describe('Shimmer Component', () => {
    test('renders with correct structure', () => {
        const { getByTestId } = render(<Shimmer />);
        expect(getByTestId('shimmer')).toBeInTheDocument();
        // Checks for the presence of shimmer elements
        expect(getByTestId('airline-shimmer')).toHaveClass('bg-gray-300');
        expect(getByTestId('route-shimmer')).toHaveClass('bg-gray-300');
        expect(getByTestId('price-shimmer')).toHaveClass('bg-gray-300');
    });
});
