import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const TripDetail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/trips/${id}`);
        setTrip(res.data);
      } catch (err) {
        console.error('Error fetching trip:', err);
      }
    };
    fetchTrip();
  }, [id]);

  if (!trip) return <div>Loading trip details...</div>;
  if (!trip.route || trip.route.length < 2) return <div>Trip route not available</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Trip Detail</h2>
      <p><strong>Truck ID:</strong> {trip.truckId}</p>
      <p><strong>From:</strong> {trip.origin}</p>
      <p><strong>To:</strong> {trip.destination}</p>

      <MapContainer
        center={[trip.route[0].lat, trip.route[0].lng]}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: '400px', width: '100%', marginTop: '1rem' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {trip.route.map((point, idx) => (
          <Marker key={idx} position={[point.lat, point.lng]} />
        ))}
        <Polyline positions={trip.route.map(p => [p.lat, p.lng])} color="blue" />
      </MapContainer>
    </div>
  );
};

export default TripDetail;
