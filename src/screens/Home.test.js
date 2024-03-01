import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';
import '@testing-library/jest-dom';

describe('Home Component', () => {
    test('renders with flight data and allows sort and filter operations', async () => {
        render(<Home />);
        const sortButton = screen.getByText('Sort by Price');
        const selectDropdown = screen.getByRole('combobox');
        fireEvent.click(sortButton);
        fireEvent.change(selectDropdown, { target: { value: 'IndiGo' } });
        await waitFor(() => expect(screen.getByText('Delhi to Mumbai')).toBeInTheDocument(), { timeout: 2000 });
    });
});
