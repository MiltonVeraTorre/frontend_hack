import { setTolerancia } from '@/redux/slices/formularioSlice'
import { RootState } from '@/redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface Props{
    titulo:string
    descripcion:string
    value:number
}

export default function OpcionRiesgo({titulo,descripcion,value}:Props) {

    const riesgoSelected = useSelector((state:RootState)=>state.formulario.tolerancia === value)

    const dispatch = useDispatch()
  return (
    <button 
    onClick={()=>{
        dispatch(setTolerancia(value))
    }}
    className={`flex items-center pl-3 pr-2 ${riesgoSelected ? "bg-red-500" : "bg-slate-50 "} rounded-md w-full py-2  transition-colors`}>
        <div className="">
            <p className={`text-lg  ${riesgoSelected ? "text-gray-50" : "text-red-700"}  font-bold text-left`}>{titulo}</p>
            <p className={` ${riesgoSelected ? "text-gray-50" : "text-red-700"} text-sm text-left`}>{descripcion}</p>
        </div>
    </button>
  )
}
