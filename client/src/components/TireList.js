import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TireList = () => {
  const [tires, setTires] = useState([]);

  const fetchTires = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tires', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Add JWT token
        },
      });
      setTires(res.data); // Update state with fetched tires
    } catch (err) {
      console.error('Error fetching tires:', err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchTires(); // Fetch tires when the component mounts
  }, []);

  return (
    <div>
      <h2>Tires</h2>
      {tires.length > 0 ? (
        <ul>
          {tires.map((tire) => (
            <li key={tire._id}>
              {tire.brand} - ${tire.price} (Stock: {tire.inventory})
            </li>
          ))}
        </ul>
      ) : (
        <p>No tires found.</p>
      )}
    </div>
  );
};

export default TireList;