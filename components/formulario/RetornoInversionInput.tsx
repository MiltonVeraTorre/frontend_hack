import { setTiempoRetorno } from "@/redux/slices/formularioSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RetornoInversionInput() {

  return (
    <div className="grid place-items-center gap-4 w-5/6">
      <BotonInput value={3} texto="Menos de 60 días" />
      <BotonInput value={6} texto="6 meses" />
      <BotonInput value={12} texto="1 año" />
      <PersonalizadoInput />
    </div>
  );
}

interface BotonInputProps {
  value: number;
  texto: string;
}

function BotonInput({ texto, value }: BotonInputProps) {
  const retorno = useSelector(
    (state: RootState) => state.formulario.tiempo_retorno
  );

  const dispatch = useDispatch();

  return (
    <button
      className={` ${
        retorno === value
          ? "bg-red-500 text-slate-50"
          : "bg-slate-50 text-red-700"
      } w-full  px-4 py-2 rounded-md text-left font-bold text-lg`}
      type="button"
      onClick={() => {
        dispatch(setTiempoRetorno(value));
      }}
    >
      {texto}
    </button>
  );
}

interface PersonalizadoProps {}

function PersonalizadoInput() {
  const retorno = useSelector(
    (state: RootState) => state.formulario.tiempo_retorno
  );

  const excepciones = [3, 6, 12];

  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <input
        type="number"
        value={excepciones.includes(retorno) ? "" : (retorno / 60 || "")}
        onChange={(e) => {
          dispatch(setTiempoRetorno(+e.target.value * 60));
        }}
        className="w-full px-4 py-2 rounded-md text-left font-bold text-lg "
        placeholder="+ 1 año (escribir cantidad de años)"
      />
    </div>
  );
}
