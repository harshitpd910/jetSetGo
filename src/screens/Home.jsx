import React,{ useEffect, useState } from 'react';
// import { fetchFlights } from '../api/fetchFlights';
import FlightCard from '../components/FlightCard';
import FilterSort from '../components/FilterSort';
import ShimmerEffect from '../components/Shimmer';

const mockData = [{ "id": 1, "gate": "A2", "price": 5000, "origin": "Delhi", "airline": "IndiGo", "aircraft": "Airbus A320", "duration": "3 hours", "arrivalTime": "2024-03-15T11:00:00", "destination": "Mumbai", "flightNumber": "6E101", "departureTime": "2024-03-15T08:00:00", "seatsAvailable": 120 }, { "id": 2, "gate": "B3", "price": 6000, "origin": "Delhi", "airline": "Air India", "aircraft": "Boeing 787", "duration": "3 hours 30 minutes", "arrivalTime": "2024-03-15T12:30:00", "destination": "Bangalore", "flightNumber": "AI202", "departureTime": "2024-03-15T09:00:00", "seatsAvailable": 100 }, { "id": 3, "gate": "C1", "price": 5500, "origin": "Mumbai", "airline": "SpiceJet", "aircraft": "Boeing 737", "duration": "3 hours 30 minutes", "arrivalTime": "2024-03-15T13:30:00", "destination": "Delhi", "flightNumber": "SG303", "departureTime": "2024-03-15T10:00:00", "seatsAvailable": 90 }, { "id": 4, "gate": "D2", "price": 4500, "origin": "Mumbai", "airline": "Vistara", "aircraft": "Airbus A320", "duration": "2 hours 30 minutes", "arrivalTime": "2024-03-15T13:30:00", "destination": "Bangalore", "flightNumber": "UK404", "departureTime": "2024-03-15T11:00:00", "seatsAvailable": 110 }, { "id": 5, "gate": "A4", "price": 6500, "origin": "Bangalore", "airline": "GoAir", "aircraft": "Airbus A320", "duration": "3 hours 30 minutes", "arrivalTime": "2024-03-15T15:30:00", "destination": "Delhi", "flightNumber": "G805", "departureTime": "2024-03-15T12:00:00", "seatsAvailable": 80 }, { "id": 6, "gate": "B2", "price": 4000, "origin": "Bangalore", "airline": "AirAsia", "aircraft": "Airbus A320", "duration": "1 hour 30 minutes", "arrivalTime": "2024-03-15T14:30:00", "destination": "Mumbai", "flightNumber": "I505", "departureTime": "2024-03-15T13:00:00", "seatsAvailable": 100 }, { "id": 7, "gate": "C3", "price": 5500, "origin": "Delhi", "airline": "IndiGo", "aircraft": "Airbus A320", "duration": "3 hours", "arrivalTime": "2024-03-15T12:30:00", "destination": "Chennai", "flightNumber": "6E107", "departureTime": "2024-03-15T09:30:00", "seatsAvailable": 120 }, { "id": 8, "gate": "D4", "price": 4800, "origin": "Mumbai", "airline": "Air India", "aircraft": "Boeing 737", "duration": "3 hours", "arrivalTime": "2024-03-15T14:30:00", "destination": "Chennai", "flightNumber": "AI208", "departureTime": "2024-03-15T11:30:00", "seatsAvailable": 90 }, { "id": 9, "gate": "A6", "price": 6000, "origin": "Bangalore", "airline": "SpiceJet", "aircraft": "Boeing 737", "duration": "3 hours", "arrivalTime": "2024-03-15T16:30:00", "destination": "Kolkata", "flightNumber": "SG309", "departureTime": "2024-03-15T13:30:00", "seatsAvailable": 100 }, { "id": 10, "gate": "B7", "price": 7000, "origin": "Delhi", "airline": "Vistara", "aircraft": "Airbus A320", "duration": "3 hours", "arrivalTime": "2024-03-15T17:00:00", "destination": "Kolkata", "flightNumber": "UK410", "departureTime": "2024-03-15T14:00:00", "seatsAvailable": 120 }, { "id": 11, "gate": "C8", "price": 6200, "origin": "Mumbai", "airline": "GoAir", "aircraft": "Airbus A320", "duration": "3 hours", "arrivalTime": "2024-03-15T18:00:00", "destination": "Kolkata", "flightNumber": "G811", "departureTime": "2024-03-15T15:00:00", "seatsAvailable": 80 }, { "id": 12, "gate": "D1", "price": 5400, "origin": "Chennai", "airline": "AirAsia", "aircraft": "Airbus A320", "duration": "3 hours 30 minutes", "arrivalTime": "2024-03-15T13:30:00", "destination": "Delhi", "flightNumber": "I513", "departureTime": "2024-03-15T10:00:00", "seatsAvailable": 100 }, { "id": 13, "gate": "A3", "price": 5300, "origin": "Chennai", "airline": "IndiGo", "aircraft": "Airbus A320", "duration": "3 hours", "arrivalTime": "2024-03-15T15:00:00", "destination": "Mumbai", "flightNumber": "6E113", "departureTime": "2024-03-15T12:00:00", "seatsAvailable": 110 }, { "id": 14, "gate": "B5", "price": 5500, "origin": "Chennai", "airline": "Air India", "aircraft": "Boeing 787", "duration": "3 hours", "arrivalTime": "2024-03-15T16:30:00", "destination": "Bangalore", "flightNumber": "AI216", "departureTime": "2024-03-15T13:30:00", "seatsAvailable": 90 }, { "id": 15, "gate": "C4", "price": 5900, "origin": "Kolkata", "airline": "SpiceJet", "aircraft": "Boeing 737", "duration": "3 hours 30 minutes", "arrivalTime": "2024-03-15T14:30:00", "destination": "Delhi", "flightNumber": "SG319", "departureTime": "2024-03-15T11:00:00", "seatsAvailable": 100 }, { "id": 16, "gate": "D6", "price": 6100, "origin": "Kolkata", "airline": "Vistara", "aircraft": "Airbus A320", "duration": "3 hours", "arrivalTime": "2024-03-15T15:30:00", "destination": "Mumbai", "flightNumber": "UK424", "departureTime": "2024-03-15T12:30:00", "seatsAvailable": 120 }, { "id": 17, "gate": "A7", "price": 6800, "origin": "Kolkata", "airline": "GoAir", "aircraft": "Airbus A320", "duration": "3 hours 30 minutes", "arrivalTime": "2024-03-15T17:30:00", "destination": "Bangalore", "flightNumber": "G827", "departureTime": "2024-03-15T14:00:00", "seatsAvailable": 80 }, { "id": 18, "gate": "B8", "price": 5200, "origin": "Delhi", "airline": "AirAsia", "aircraft": "Airbus A320", "duration": "3 hours", "arrivalTime": "2024-03-15T18:30:00", "destination": "Chennai", "flightNumber": "I529", "departureTime": "2024-03-15T15:30:00", "seatsAvailable": 90 }, { "id": 19, "gate": "C9", "price": 5400, "origin": "Mumbai", "airline": "IndiGo", "aircraft": "Airbus A320", "duration": "3 hours", "arrivalTime": "2024-03-15T19:00:00", "destination": "Chennai", "flightNumber": "6E139", "departureTime": "2024-03-15T16:00:00", "seatsAvailable": 100 }, { "id": 20, "gate": "D10", "price": 6200, "origin": "Bangalore", "airline": "Air India", "aircraft": "Boeing 787", "duration": "3 hours 30 minutes", "arrivalTime": "2024-03-15T20:30:00", "destination": "Kolkata", "flightNumber": "AI230", "departureTime": "2024-03-15T17:00:00", "seatsAvailable": 110 }];
const Home = () => {
    const [flights, setFlights] = useState(mockData);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false); 

    // useEffect(() => {
    //     const getFlights = async () => {
    //         const data = await fetchFlights();
    //         setFlights(data);
    //     };
    //     getFlights();
    // }, []);

    // Add sorting and filtering logic here
    const handleSort = () => {
        setLoading(true); // Enable loading state
        setTimeout(() => { // Simulate asynchronous operation
            const sortedFlights = [...flights].sort((a, b) => a.price - b.price);
            setFlights(sortedFlights);
            setLoading(false); // Disable loading state after sorting
        }, 2000); // Simulate delay
    };

    // Example filter function (you can modify it to filter by airlines or other criteria)
    const handleFilter = (event) => {
        const airline = event.target.value;
        setFilter(airline);
        const filteredFlights = mockData.filter(flight => airline === '' || flight.airline === airline);
        setFlights(filteredFlights);
    };

    return (
        <div className="flex flex-col min-h-screen">

            <header className="bg-blue-100 p-4 md:p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center text-center md:text-left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                    aria-describedby="desc" role="img" className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 mx-auto md:mx-0">
                    <path data-name="layer1"
                        d="M57.4 38.3L37 22.5v-15a5 5 0 0 0-10 0v15L6.6 38.3S5 39.4 5 40.5v4.2a1.3 1.3 0 0 0 .7 1.3c.5.3 1.9-.3 2.4-.5L27 39.4v11.1L19.7 56a1.6 1.6 0 0 0-.7 1.4v3.1c0 .4.1 1.3 1.4.8L32 56.5l11.6 4.8c1.4.5 1.4-.5 1.4-.8v-3.1a1.6 1.6 0 0 0-.7-1.4L37 50.5V39.4l18.9 6.2c.5.2 1.9.7 2.4.5a1.3 1.3 0 0 0 .7-1.3v-4.3c0-1.1-1.6-2.2-1.6-2.2z"
                        fill="#202020"></path>
                </svg>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-blue-900 font-bold">Welcome to JETSETGO</h1>
                    <h3 className="text-xl md:text-2xl text-blue-700">Experience a smooth flight searching experience with us</h3>
                </div>
            </header>

            <div className="flex justify-between items-center bg-white py-4 px-8 sticky top-0 z-50">
                <FilterSort onSort={handleSort} onFilter={handleFilter} />
                <select onChange={handleFilter} role="combobox" value={filter} className="form-select appearance-none
                 block px-3 py-1.5 text-base font-normal
                 text-gray-700 bg-white bg-clip-padding bg-no-repeat
                 border border-solid border-gray-300 rounded transition
                 ease-in-out m-0 focus:text-gray-700 focus:bg-white
                 focus:border-blue-600 focus:outline-none">
                    <option value="">All Airlines</option>
                    {[...new Set(mockData.map(flight => flight.airline))].map(airline => (
                        <option key={airline} value={airline}>{airline}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto">
                {loading ? (
                    Array.from({ length: 6 }).map((_, idx) => <ShimmerEffect key={idx} />) // Display shimmer effect placeholders
                ) : (
                    flights.map(flight => <FlightCard key={flight.id} flight={flight} />)
                )}
            </div>
        </div>


    );
};

export default Home;
