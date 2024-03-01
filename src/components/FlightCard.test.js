import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlightCard from './FlightCard';

describe('FlightCard Component', () => {
    test('renders FlightCard component with flight information', () => {
        render(<FlightCard flight={{ id: 1, airline: 'IndiGo', origin: 'Delhi', destination: 'Mumbai', price: 5000 }} />);

        expect(screen.getByText(/IndiGo/)).toBeInTheDocument();
        expect(screen.getByText(/Delhi to Mumbai/)).toBeInTheDocument();
        expect(screen.getByText(/Price: \$5000/)).toBeInTheDocument();
    });
});
