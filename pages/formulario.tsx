import React, { useState } from 'react';

function FormularioMultipaso() {
    const [paso, setPaso] = useState(1);
    const [objetivo, setObjetivo] = useState('');
    const [montoInicial, setMontoInicial] = useState('');
    const [montoMensual, setMontoMensual] = useState('');
    const [tiempoRetorno, setTiempoRetorno] = useState('');
    const [toleranciaRiesgo, setToleranciaRiesgo] = useState('');

    const siguientePaso = () => {
        setPaso(prevPaso => prevPaso + 1);
    };

    return (
        <div>
            {paso === 1 && (
                <div>
                    <h2>Indica tus objetivos:</h2>
                    <select value={objetivo} onChange={e => setObjetivo(e.target.value)}>
                        <option value="">Selecciona un objetivo</option>
                        <option value="Fondo de emergencia">Fondo de emergencia</option>
                        <option value="Construir patrimonio">Construir patrimonio</option>
                        <option value="Invertir para mi retiro">Invertir para mi retiro</option>
                    </select>
                    <button onClick={siguientePaso}>Siguiente</button>
                </div>
            )}
            {paso === 2 && (
                <div>
                    <h2>Monto Inicial de Inversión:</h2>
                    <input
                        type="number"
                        value={montoInicial}
                        onChange={e => setMontoInicial(e.target.value)}
                        placeholder="Ingrese el monto inicial"
                    />
                    <button onClick={siguientePaso}>Siguiente</button>
                </div>
            )}

            {paso === 3 && (
                <div>
                    <h2>Monto Mensual de Inversión:</h2>
                    <input
                        type="number"
                        value={montoMensual}
                        onChange={e => setMontoMensual(e.target.value)}
                        placeholder="Ingrese el monto mensual"
                    />
                    <button onClick={siguientePaso}>Siguiente</button>
                </div>
            )}

            {paso === 4 && (
                <div>
                    <h2>Tiempo de retorno esperado:</h2>
                    <input
                        type="number"
                        value={tiempoRetorno}
                        onChange={e => setTiempoRetorno(e.target.value)}
                        placeholder="Ingrese el tiempo en meses"
                    />
                    <button onClick={siguientePaso}>Siguiente</button>
                </div>
            )}

            {paso === 5 && (
                <div>
                    <h2>Tolerancia al riesgo</h2>
                    <select value={toleranciaRiesgo} onChange={e => setToleranciaRiesgo(e.target.value)}>
                        <option value="">Seleccione su tolerancia al riesgo</option>
                        <option value="Muy Baja">Muy Baja</option>
                        <option value="Baja">Baja</option>
                        <option value="Normal">Normal</option>
                        <option value="Alta">Alta</option>
                        <option value="Muy Alta">Muy Alta</option>
                    </select>
                    <button onClick={siguientePaso}>Finalizar</button>
                </div>
            )}


            {paso === 6 && (
                <div>
                    <h2>Resumen</h2>
                    <p>Objetivo: {objetivo}</p>
                    <p>Monto Inicial de Inversión: ${montoInicial}</p>
                    <p>Monto Mensual de Inversión: ${montoMensual}</p>
                    <p>Tiempo de retorno esperado: {tiempoRetorno} meses</p>
                    <p>Tolerancia al riesgo: {toleranciaRiesgo}%</p>
                </div>
            )}
        </div>
    );
}

