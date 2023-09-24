import React from 'react'

interface Props{
    value:number
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export default function InputDinero({value,onChange}:Props) {
  return (
    <div className='flex items-center bg-gray-100 px-3 rounded-md py-2 w-full'>
        <input 
        
        type="number" 
        value={value || ""}
        onChange={onChange}
        className='bg-gray-100 focus:outline-none w-full'
        placeholder='Ingresar monto'
        />

        <p className='font-bold text-slate-900'>MXN</p>

    </div>
  )
}
