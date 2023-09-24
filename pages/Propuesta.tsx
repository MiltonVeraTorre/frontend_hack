// Propuesta.js
import { Fondo } from '@/types/ModelTypes';
import React from 'react';

interface Props{
  fondo:Fondo
}



function Propuesta({ fondo }:Props) {
  return (
    <div className="propuesta">
      <h3>{fondo.nombre}</h3>
      <p>Nombre de Estrategia: {fondo.nombre}</p>
      <p>Tipo de Fondo: {fondo.tipo}</p>
      <p>Riesgo: {fondo.riesgo}</p>
      <p>Estrategia: {fondo.estrategia}</p>
      <p>Disponibilidad: {fondo.disponibilidad}</p>
      <p>Plazo Minimo: {fondo.plazomin}</p>
      <p>Tipo de Inversion: {fondo.tipoinv}</p>
      <p>Presupuesto Mínimo: ${fondo.minimo}</p>
      <p>Presupuesto Máximo: ${fondo.maximo}</p>
      <p>Comision: {fondo.comision}</p>
      <p>Rendimiento: {fondo.rendimiento}</p>
      <p>Riesgo: {fondo.riesgo}</p>
      {/* ... otros detalles del fondo ... */}
    </div>
  );
}

export default Propuesta;
