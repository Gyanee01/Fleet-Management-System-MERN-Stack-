import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

<tbody>
  {trips.map((trip) => (
    <tr key={trip._id}>
      <td>{trip.truckNumber}</td>
      <td>{trip.driverName}</td>
      <td>{trip.startLocation}</td>
      <td>{trip.endLocation}</td>
      <td>{trip.status}</td>
      <td>
        <button
          onClick={() => navigate(`/trips/${trip._id}`)}
          style={{ padding: '5px 10px', cursor: 'pointer' }}
        >
          View
        </button>
      </td>
    </tr>
  ))}
</tbody>
