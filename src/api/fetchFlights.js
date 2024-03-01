import axios from 'axios';

export const fetchFlights = async () => {
    try {
        const response = await axios.get('https://api.npoint.io/4829d4ab0e96bfab50e7');
        return response.data;
    } catch (error) {
        console.error("Error fetching flights:", error);
        return [];
    }
};
