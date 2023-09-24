import React, { useState } from "react";
import Grafica from "../graphs/Grafica";

import { EstrategiaInt, FondoInt } from "@/types/AppTypes";
import { useDispatch } from "react-redux";
import { seleccionarPropuesta } from "@/redux/thunks/formularioThunks";
import { useRouter } from "next/router";

interface Props {
  propuesta: EstrategiaInt;
}

export default function Propuesta({ propuesta }: Props) {
  const [fondoActual, setFondoActual] = useState<null | FondoInt>(null);

  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <div className="bg-gray-50 w-full p-4 rounded-lg">
      <p className="text-red-500 font-bold capitalize">
        Propuesta de inversion
      </p>

      <div className="grid grid-cols-2 mt-8">
        <div>
          <p className="text-2xl font-bold">
            {propuesta.rendimientoAnualPromedio}%
          </p>
          <p className="text-2xl font-bold">
            {Math.ceil(propuesta.grafica[propuesta.grafica.length - 1].value)}{" "}
            <span className="text-lg">mil</span>
          </p>
          <div className="flex items-center gap-2 mt-3">
            <i className="fa-solid fa-circle text-green-500 text-2xl"></i>
            <p className="text-gray-600">
              Riesgo{" "}
              <span className="uppercase text-gray-700 font-bold text-sm">
                {propuesta.riesgoPromedio}
              </span>
            </p>
          </div>
        </div>
        <div className="w-full">
          <Grafica titulo="Inversion Pasiva" data={propuesta.grafica} />
        </div>
      </div>

      <div className="flex items-center bg-gray-200 rounded-2xl px-2">
        {propuesta.propuesta.map((propuesta, i) => (
          <button
            key={i}
            type="button"
            className="grid place-items-center px-4 py-2"
            style={{
              width: `${propuesta.porcentaje}%`,
            }}
            onClick={() => setFondoActual(propuesta.fondo)}
          >
            <p className="font-bold underline ">{propuesta.fondo.nombre}</p>
            <p className="text-red-500">{propuesta.porcentaje}%</p>
          </button>
        ))}
      </div>

      {fondoActual && (
        <div className="bg-gray-100 p-3 rounded-md mt-3">
          <h5 className="text-gray-700 font-bold">¿Que es?</h5>
          <p className="text-gray-600">{fondoActual?.estrategia}</p>
          <h5 className="text-gray-700 font-bold">Plazo Minimo</h5>
          <p className="text-gray-600">{fondoActual?.plazo_minimo} mes</p>
          <h5 className="text-gray-700 font-bold">Disponibilidad</h5>
          <p className="text-gray-600">{fondoActual?.disponibilidad} horas</p>
        </div>
      )}

      <div className="w-full grid place-items-center">
        <button
          type="button"
          className="bg-[#736060] text-gray-50 rounded-md px-4 py-2 font-bold my-3"
          onClick={()=>{
            router.push("/")
          }}
        >
          Seleccionar
        </button>
      </div>
    </div>
  );
}
