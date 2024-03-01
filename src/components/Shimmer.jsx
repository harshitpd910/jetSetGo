import React from "react";
const Shimmer = () => {
    return (
        <div data-testid="shimmer" className="w-60 mx-auto bg-white rounded-xl shadow-md overflow-hidden p-5 flex flex-col justify-between h-48">
            <div className="animate-pulse flex flex-col space-y-3">
                <div data-testid="airline-shimmer" className="bg-gray-300 h-6 rounded w-3/4"></div>
                <div data-testid="route-shimmer" className="bg-gray-300 h-4 rounded"></div>
                <div data-testid="price-shimmer" className="bg-gray-300 h-4 rounded w-1/2"></div>
            </div>
        </div>
    );
};

export default Shimmer;
