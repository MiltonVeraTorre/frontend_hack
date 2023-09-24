import { EstrategiaInt } from "@/types/ModelTypes";
import React from "react";
import Grafica from "../graphs/Grafica";

interface Props {
  estrategia: EstrategiaInt;
}

export default function Estrategia({ estrategia }: Props) {
  return (
    <div className="w-full bg-white rounded-lg px-6 py-4 leading-5 mt-4">
      <h1 className="text-[#BB0707] text-xs font-bold text-[16px]">
        {estrategia.nombre}
      </h1>
      <h2 className="bg-gray-50 text-[11.2px]">
        {estrategia.ponderacion.map(
          (ponderacion) => ponderacion.fondo.nombre + ","
        )}
      </h2>
      <h3 className="text-[9px] text-gray-300 leading-4">
        <span className="text-[15px] font-bold text-black">
          {" "}
          {estrategia.rendimiento_anual}%{" "}
        </span>{" "}
        anual
      </h3>

      <div className="w-full">
        <Grafica titulo="Inversion Pasiva" data={estrategia.grafica} />
      </div>

      <div className="flex items-center gap-3">
        <i className="fa-solid fa-circle text-green-500"></i>
        <p className="text-sm">Riesgo {estrategia.riesgo}</p>
      </div>

      <button className="mt-3 ml-7 bg-[#BB0707] text-white font-semibold rounded-md shadow-md text-[10px] py-1 px-2">
        Más detalles
      </button>
    </div>
  );
}
