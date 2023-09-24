import Propuesta from '@/components/propuestas/Propuesta'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'


export default function propuestas() {

    const propuestas = useSelector((state:RootState)=>state.formulario.estrategias)

  return (
    <div className='min-h-screen bg-[#e7e0e0]'>
        <h3 className='text-3xl font-bold ml-4 py-5'>Propuestas</h3>

        <div className='grid place-items-center gap-3 mx-2'>
            
                {propuestas.map((propuesta,i)=>
                <Propuesta key={i} propuesta={propuesta} />
                )}
            
        </div>
    </div>
  )
}
