import React from 'react';
const FlightCard = ({ flight }) => (
    <div className="w-60 mx-auto bg-white rounded-xl shadow-md overflow-hidden p-5 flex flex-col justify-between">
        <h3 className="font-bold text-lg truncate">{flight.airline}</h3>
        <p className="truncate">{flight.origin} to {flight.destination}</p>
        <p>Price: ${flight.price}</p>
    </div>
);


export default FlightCard;
