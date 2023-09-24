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
        <div className="bg-cream min-h-screen">
            <div className="bg-red-500 h-1/2 relative">
            <video
                    className="absolute inset-0 w-full h-3/5 object-cover"
                    autoPlay
                    loop
                    muted
                    src="PATH_TO_YOUR_VIDEO.mp4"
                ></video>
            </div>

            {paso === 1 && (
                <div className="text-gray-600">
                    <h2 className="text-2xl mb-4">Indica tus objetivos:</h2>
                    <select value={objetivo} onChange={e => setObjetivo(e.target.value)} className="bg-white text-red-500 p-2 mb-4 rounded">
                        <option value="">Selecciona un objetivo</option>
                        <option value="Fondo de emergencia">Fondo de emergencia</option>
                        <option value="Construir patrimonio">Construir patrimonio</option>
                        <option value="Invertir para mi retiro">Invertir para mi retiro</option>
                    </select>
                    <button onClick={siguientePaso} className="bg-gray-600 text-white p-2 rounded">Siguiente</button>
                </div>
            )}

            {paso === 2 && (
                <div className="text-gray-600">
                    <h2 className="text-2xl mb-4">Monto Inicial de Inversión:</h2>
                    <input
                        type="number"
                        value={montoInicial}
                        onChange={e => setMontoInicial(e.target.value)}
                        placeholder="Ingrese el monto inicial"
                        className="bg-white p-2 mb-4 rounded w-full"
                    />
                    <button onClick={siguientePaso} className="bg-gray-600 text-white p-2 rounded">Siguiente</button>
                </div>
            )}

            {paso === 3 && (
                <div className="text-gray-600">
                    <h2 className="text-2xl mb-4">Monto Mensual de Inversión:</h2>
                    <input
                        type="number"
                        value={montoMensual}
                        onChange={e => setMontoMensual(e.target.value)}
                        placeholder="Ingrese el monto mensual"
                        className="bg-white p-2 mb-4 rounded w-full"
                    />
                    <button onClick={siguientePaso} className="bg-gray-600 text-white p-2 rounded">Siguiente</button>
                </div>
            )}

            {paso === 4 && (
                <div className="text-gray-600">
                    <h2 className="text-2xl mb-4">Tiempo de retorno esperado:</h2>
                    <input
                        type="number"
                        value={tiempoRetorno}
                        onChange={e => setTiempoRetorno(e.target.value)}
                        placeholder="Ingrese el tiempo en meses"
                        className="bg-white p-2 mb-4 rounded w-full"
                    />
                    <button onClick={siguientePaso} className="bg-gray-600 text-white p-2 rounded">Siguiente</button>
                </div>
            )}

            {paso === 5 && (
                <div className="text-gray-600">
                    <h2 className="text-2xl mb-4">Tolerancia al riesgo</h2>
                    <select value={toleranciaRiesgo} onChange={e => setToleranciaRiesgo(e.target.value)} className="bg-white text-red-500 p-2 mb-4 rounded">
                        <option value="">Seleccione su tolerancia al riesgo</option>
                        <option value="Muy Baja">Muy Baja</option>
                        <option value="Baja">Baja</option>
                        <option value="Normal">Normal</option>
                        <option value="Alta">Alta</option>
                        <option value="Muy Alta">Muy Alta</option>
                    </select>
                    <button onClick={siguientePaso} className="bg-gray-600 text-white p-2 rounded">Finalizar</button>
                </div>
            )}

            {paso === 6 && (
                <div className="text-gray-600">
                    <h2 className="text-2xl mb-4">Resumen</h2>
                    <p className="mb-2">Objetivo: {objetivo}</p>
                    <p className="mb-2">Monto Inicial de Inversión: ${montoInicial}</p>
                    <p className="mb-2">Monto Mensual de Inversión: ${montoMensual}</p>
                    <p className="mb-2">Tiempo de retorno esperado: {tiempoRetorno} meses</p>
                    <p className="mb-2">Tolerancia al riesgo: {toleranciaRiesgo}%</p>
                </div>
            )}
        </div>
    );
}
