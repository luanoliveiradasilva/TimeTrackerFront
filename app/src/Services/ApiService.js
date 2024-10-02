
const API_URL = 'https://localhost:44370/TimeTracker/v1/timerbanks'; // Substitua pela URL da sua API

const ApiService = {
    async registerTimeEntryService(timeEntry) {

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(timeEntry),
        });

        if (!response.ok) {
            throw new Error('Failed to register time entry');
        }

        return await response.json();
    },
};

export default ApiService;