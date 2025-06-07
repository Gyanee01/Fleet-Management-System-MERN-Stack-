import api from './api';

export const getTrucks = () => api.get('/trucks');
export const createTruck = (truckData) => api.post('/trucks', truckData);
