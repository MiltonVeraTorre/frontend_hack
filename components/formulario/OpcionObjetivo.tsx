import { agregarObjetivo } from "@/redux/slices/formularioSlice"
import { RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"

interface Props{
    icon:string
    titulo:string
    descripcion:string
}

export default function OpcionObjetivo({icon,titulo,descripcion}:Props) {

    const objetivoSelected = useSelector((state:RootState)=>state.formulario.objetivos.includes(titulo))

    const dispatch = useDispatch()

  return (
    <button 
    onClick={()=>{
        dispatch(agregarObjetivo(titulo))
    }}
    className={`flex items-center  ${objetivoSelected ? "bg-red-500" : "bg-slate-50 "} rounded-md w-full py-2  transition-colors`}>
        <i className={`${icon} mx-5 text-xl  ${objetivoSelected ? "text-gray-50" : "text-gray-600 "}`}></i>
        <div className="">
            <p className={`text-lg  ${objetivoSelected ? "text-gray-50" : "text-red-700"}  font-bold text-left`}>{titulo}</p>
            <p className={` ${objetivoSelected ? "text-gray-50" : "text-red-700"} text-sm text-left`}>{descripcion}</p>
        </div>
    </button>
  )
}
