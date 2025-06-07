import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TripDetail = () => {
  const { id } = useParams();
  console.log("id is", id)
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    let intervalId;
    console.log("Inside useEffect")
    const fetchTrip = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/trips/${id}`);
        console.log("Hitting the request")
        console.log(res.data)
        console.log(res.statusText)
        if (res.data && res.data.route && res.data.route.length >= 2) {
          setTrip(res.data);
          clearInterval(intervalId);
          console.log("try block successfull",res.data)
        }
      } catch (err) {
        console.error("Error fetching trip:", err);
      }
    };

    intervalId = setInterval(fetchTrip, 1000);
    return () => clearInterval(intervalId);
  }, [id]);



  if (!trip) return <div>Loading trip details...</div>;
  if (!trip.route || trip.route.length < 2) return <div>Trip route not available</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Trip Detail</h2>
      <p><strong>Truck ID:</strong> {trip._id}</p>
      <p><strong>From:</strong> {trip.startLocation.address}</p>
      <p><strong>To:</strong> {trip.endLocation.address}</p>

      <MapContainer center={[trip.route[0].lat, trip.route[0].lng]} zoom={6} scrollWheelZoom={false} style={{ height: '400px', width: '100%', marginTop: '1rem' }}>

      </MapContainer>
    </div>
    
  )
}


export default TripDetail;