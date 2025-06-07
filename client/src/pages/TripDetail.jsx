import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icons in Leaflet
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
      const res = await axios.get(`http://localhost:5000/api/trips/${id}`);
      setTrip(res.data);
    };

    fetchTrip();
  }, [id]);

  if (!trip) return <div>Loading...</div>;

  const { startLocation, endLocation } = trip;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Trip Detail</h2>
      <p><strong>Truck:</strong> {trip.truckNumber}</p>
      <p><strong>Start:</strong> {startLocation?.address}</p>
      <p><strong>End:</strong> {endLocation?.address}</p>

      <MapContainer
        center={[startLocation.lat, startLocation.lng]}
        zoom={6}
        style={{ height: '400px', width: '100%', marginTop: '1rem' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={[startLocation.lat, startLocation.lng]} />
        <Marker position={[endLocation.lat, endLocation.lng]} />
        <Polyline
          positions={[
            [startLocation.lat, startLocation.lng],
            [endLocation.lat, endLocation.lng],
          ]}
          color="blue"
        />
      </MapContainer>
    </div>
  );
};

export default TripDetail;
