
export const fetchFlights = async () => {
    try {
        const response = await fetch('https://api.npoint.io/378e02e8e732bb1ac55b');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching flights:", error);
        return [];
    }
};
