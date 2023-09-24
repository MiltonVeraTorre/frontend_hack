// Dashboard.js
import React, { useState, useEffect } from 'react';
import Propuesta from './Propuesta';

function Dashboard() {
  const [propuestas, setPropuestas] = useState([]);

  useEffect(() => {
    // Aquí es donde típicamente harías la petición al backend para obtener las propuestas.
    // Usaré un arreglo de ejemplo:
    const propuestasDesdeBackend = [
      /*... datos de las propuestas ...*/
    ];
    setPropuestas(propuestasDesdeBackend);
  }, []);

  return (
    <div className="dashboard">
      <h2>Propuestas de inversión</h2>
      {propuestas.map(fondo => (
        <Propuesta key={fondo.id} fondo={fondo} />
      ))}
    </div>
  );
}

export default Dashboard;
