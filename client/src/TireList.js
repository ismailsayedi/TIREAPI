import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TireList = ({ token }) => {
  const [tires, setTires] = useState([]);

  useEffect(() => {
    const fetchTires = async () => {
      const res = await axios.get('http://localhost:5000/api/tires', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTires(res.data);
    };
    fetchTires();
  }, [token]);

  return (
    <div>
      <h2>Tires</h2>
      <ul>
        {tires.map(tire => (
          <li key={tire._id}>{tire.brand} - ${tire.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default TireList;