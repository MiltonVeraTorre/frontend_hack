import BotonSiguiente from "@/components/formulario/BotonSiguiente";
import InputDinero from "@/components/formulario/InputDinero";
import OpcionObjetivo from "@/components/formulario/OpcionObjetivo";
import OpcionRiesgo from "@/components/formulario/OpcionRiesgo";
import RetornoInversionInput from "@/components/formulario/RetornoInversionInput";
import FormularioLayout from "@/layout/FormularioLayout";
import {
  setMontoInicial,
  setMontoMensual,
  siguientePaso,
} from "@/redux/slices/formularioSlice";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PantallaCarga from "@/components/formulario/PantallaCarga";
import { crearPropuestas } from "@/redux/thunks/formularioThunks";
import { useRouter } from "next/router";

export default function FormularioMultipaso() {
  const paso = useSelector((state: RootState) => state.formulario.paso);
  const cargando = useSelector((state: RootState) => state.formulario.cargando);
  const estrategias = useSelector((state: RootState) => state.formulario.estrategias);

  const router = useRouter()

  useEffect(()=>{
    if(estrategias.length > 0 ){
      router.push('/propuestas')
    }
  },[estrategias])

  return cargando ? (
    <PantallaCarga />
  ) : (
    <FormularioLayout>
      {paso === 1 && <Bienvenida />}
      {paso === 2 && <Objetivos />}
      {paso === 3 && <MontoInicial />}
      {paso === 4 && <MontoMensual />}
      {paso === 5 && <RetornoInversion />}
      {paso === 6 && <PreguntaRiesgo />}
    </FormularioLayout>
  );
}

function Bienvenida() {
  const dispatch = useDispatch();

  return (
    <div className="grid place-items-center">
      <h3 className="text-4xl font-bold text-gray-700">Bienvenido</h3>
      <p className="text-center mt-6 w-2/3 font-bold text-[#666666] text-lg">
        Mi nombre es Ana, tu asesora financiera. Te voy a ayudar a encontrar las
        mejores opciones de inversion en base a tus necesidades y objetivos.
      </p>

      <button
        type="button"
        className="bg-red-700 px-4 py-2 rounded-md text-gray-50 font-bold text-xl mt-10"
        onClick={() => {
          dispatch(siguientePaso());
        }}
      >
        Comenzar
      </button>
    </div>
  );
}

function Objetivos() {
  return (
    <div className="grid place-items-center">
      <h3 className="text-xl text-justify w-5/6 font-bold text-gray-700">
        Comencemos! Cuentanos tus objetivos financieros (puedes seleccionar
        varias opciones)
      </h3>
      <div className="w-[90%] grid place-items-center gap-3 mt-4">
        <OpcionObjetivo
          icon="fa-solid fa-suitcase-medical"
          titulo="Tener un fondo de emergencia"
          descripcion="Tener un respaldo para imprevistas"
        />
        <OpcionObjetivo
          icon="fa-solid fa-money-bill"
          titulo="Construir mi patrimonio"
          descripcion="Crecer mi ahorro para comprar una casa, etc."
        />
        <OpcionObjetivo
          icon="fa-solid fa-person-walking-with-cane"
          titulo="Invertir para mi retiro"
          descripcion="Mantener un buen estilo de vida para el futuro"
        />
      </div>
      <div className="w-full grid place-items-center my-7">
        <BotonSiguiente />
      </div>
    </div>
  );
}

function MontoInicial() {
  const montoInicial = useSelector(
    (state: RootState) => state.formulario.monto_inicial
  );

  const dispatch = useDispatch();

  return (
    <div className="grid place-items-center">
      <h3 className="text-xl text-justify w-5/6 font-bold text-gray-700">
        Con cuanto dinero quieres comenzar a invertir (monto inicial)?
      </h3>
      <div className="w-5/6 mt-10">
        <InputDinero
          value={montoInicial}
          onChange={(e) => {
            dispatch(setMontoInicial(+e.target.value));
          }}
        />
      </div>
      <div className="w-full grid place-items-center my-7">
        <BotonSiguiente />
      </div>
    </div>
  );
}
function MontoMensual() {
  const montoMensual = useSelector(
    (state: RootState) => state.formulario.monto_mensual
  );

  const dispatch = useDispatch();

  return (
    <div className="grid place-items-center">
      <h3 className="text-xl text-justify w-5/6 font-bold text-gray-700">
        Cual es el monto mensual de inversion que estas dispuesto a hacer?
      </h3>
      <div className="w-5/6 mt-10">
        <InputDinero
          value={montoMensual}
          onChange={(e) => {
            dispatch(setMontoMensual(+e.target.value));
          }}
        />
      </div>
      <div className="w-full grid place-items-center my-7">
        <BotonSiguiente />
      </div>
    </div>
  );
}

function RetornoInversion() {
  return (
    <div className="grid place-items-center">
      <h3 className="text-xl text-justify w-5/6 font-bold text-gray-700">
        Cual es tu tiempo de retorno esperado sobre tu inversion?
      </h3>
      <div className="w-full grid place-items-center mt-6">
        <RetornoInversionInput />
      </div>

      <div className="w-full grid place-items-center mt-5">
        <BotonSiguiente />
      </div>
    </div>
  );
}

function PreguntaRiesgo() {
  const dispatch = useDispatch<any>();

  return (
    <div className="grid place-items-center">
      <h3 className="text-xl text-justify w-5/6 font-bold text-gray-700">
        Cuanto riesgo estas dipuest@ a tomar?
      </h3>
      <div className="w-[90%] grid place-items-center gap-3 mt-4">
        <OpcionRiesgo
          titulo="Bajo"
          descripcion="Prefiero no tener perdidas, aunque mi ganancia no sea
          tan alta "
          value={1}
        />
        <OpcionRiesgo
          titulo="Medio"
          descripcion="Acepto perdidas no tan grandes, siempre y cuando
          obtenga mejores rendimientos a largo plazo"
          value={3}
        />
        <OpcionRiesgo
          titulo="Alto"
          descripcion="Acepto cambios negativos en el valor de mis inversiones, 
          siempre y cuando estas se recuperen y terminen generando un mejor rendimiento"
          value={5}
        />
      </div>
      <div className="w-full grid place-items-center my-7">
        <button
          type="button"
          className="bg-gray-500 text-gray-50 px-4 py-2 rounded-md text-white-50 font-bold text-xl flex items-center gap-3"
          onClick={() => {
            dispatch(crearPropuestas());
          }}
        >
          <p>Comenzar</p>
          <i className="fa-solid fa-check text-gray-50"></i>
        </button>
      </div>
    </div>
  );
}

// function codigo(){
//     return (
//         <div className="bg-cream min-h-screen">
//       <div className="bg-red-500 h-1/2 relative">
//         <video
//           className="absolute inset-0 w-full h-3/5 object-cover"
//           autoPlay
//           loop
//           muted
//           src="PATH_TO_YOUR_VIDEO.mp4"
//         ></video>
//       </div>

//       {paso === 1 && (
//         <div className="text-gray-600">
//           <h2 className="text-2xl mb-4">Indica tus objetivos:</h2>
//           <select
//             value={objetivo}
//             onChange={(e) => setObjetivo(e.target.value)}
//             className="bg-white text-red-500 p-2 mb-4 rounded"
//           >
//             <option value="">Selecciona un objetivo</option>
//             <option value="Fondo de emergencia">Fondo de emergencia</option>
//             <option value="Construir patrimonio">Construir patrimonio</option>
//             <option value="Invertir para mi retiro">
//               Invertir para mi retiro
//             </option>
//           </select>
//           <button
//             onClick={siguientePaso}
//             className="bg-gray-600 text-white p-2 rounded"
//           >
//             Siguiente
//           </button>
//         </div>
//       )}

//       {paso === 2 && (
//         <div className="text-gray-600">
//           <h2 className="text-2xl mb-4">Monto Inicial de Inversión:</h2>
//           <input
//             type="number"
//             value={montoInicial}
//             onChange={(e) => setMontoInicial(e.target.value)}
//             placeholder="Ingrese el monto inicial"
//             className="bg-white p-2 mb-4 rounded w-full"
//           />
//           <button
//             onClick={siguientePaso}
//             className="bg-gray-600 text-white p-2 rounded"
//           >
//             Siguiente
//           </button>
//         </div>
//       )}

//       {paso === 3 && (
//         <div className="text-gray-600">
//           <h2 className="text-2xl mb-4">Monto Mensual de Inversión:</h2>
//           <input
//             type="number"
//             value={montoMensual}
//             onChange={(e) => setMontoMensual(e.target.value)}
//             placeholder="Ingrese el monto mensual"
//             className="bg-white p-2 mb-4 rounded w-full"
//           />
//           <button
//             onClick={siguientePaso}
//             className="bg-gray-600 text-white p-2 rounded"
//           >
//             Siguiente
//           </button>
//         </div>
//       )}

//       {paso === 4 && (
//         <div className="text-gray-600">
//           <h2 className="text-2xl mb-4">Tiempo de retorno esperado:</h2>
//           <input
//             type="number"
//             value={tiempoRetorno}
//             onChange={(e) => setTiempoRetorno(e.target.value)}
//             placeholder="Ingrese el tiempo en meses"
//             className="bg-white p-2 mb-4 rounded w-full"
//           />
//           <button
//             onClick={siguientePaso}
//             className="bg-gray-600 text-white p-2 rounded"
//           >
//             Siguiente
//           </button>
//         </div>
//       )}

//       {paso === 5 && (
//         <div className="text-gray-600">
//           <h2 className="text-2xl mb-4">Tolerancia al riesgo</h2>
//           <select
//             value={toleranciaRiesgo}
//             onChange={(e) => setToleranciaRiesgo(e.target.value)}
//             className="bg-white text-red-500 p-2 mb-4 rounded"
//           >
//             <option value="">Seleccione su tolerancia al riesgo</option>
//             <option value="Muy Baja">Muy Baja</option>
//             <option value="Baja">Baja</option>
//             <option value="Normal">Normal</option>
//             <option value="Alta">Alta</option>
//             <option value="Muy Alta">Muy Alta</option>
//           </select>
//           <button
//             onClick={siguientePaso}
//             className="bg-gray-600 text-white p-2 rounded"
//           >
//             Finalizar
//           </button>
//         </div>
//       )}

//       {paso === 6 && (
//         <div className="text-gray-600">
//           <h2 className="text-2xl mb-4">Resumen</h2>
//           <p className="mb-2">Objetivo: {objetivo}</p>
//           <p className="mb-2">Monto Inicial de Inversión: ${montoInicial}</p>
//           <p className="mb-2">Monto Mensual de Inversión: ${montoMensual}</p>
//           <p className="mb-2">
//             Tiempo de retorno esperado: {tiempoRetorno} meses
//           </p>
//           <p className="mb-2">Tolerancia al riesgo: {toleranciaRiesgo}%</p>
//         </div>
//       )}
//     </div>
//     )
// }
