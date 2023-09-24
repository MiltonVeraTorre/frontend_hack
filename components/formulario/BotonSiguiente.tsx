import { siguientePaso } from "@/redux/slices/formularioSlice";
import React from "react";
import { useDispatch } from "react-redux";
interface SiguienteProps {
  siguientePaso: () => void;
}
export default function BotonSiguiente(){

  const dispatch = useDispatch()

  return (
    <button
    type="button"
    className="bg-gray-500 text-gray-50 px-4 py-2 rounded-md text-white-50 font-bold text-xl flex items-center gap-3"
    onClick={() => {
      dispatch(siguientePaso())
    }}
  >
    <p>Continuar</p>
    <i className="fa-solid fa-arrow-right text-gray-50"></i>
    
  </button>
  )
}

       