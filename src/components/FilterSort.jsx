import React from 'react';

const FilterSort = ({ onSort }) => (
    <div className="flex space-x-2 justify-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => onSort('price')}>Sort by Price</button>
    </div>
);

export default FilterSort;
