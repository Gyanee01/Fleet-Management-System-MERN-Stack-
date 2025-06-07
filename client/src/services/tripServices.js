import api from './api';

export const getTrips = () => api.get('/trips');
export const createTrip = (tripData) => api.post('/trips', tripData);
