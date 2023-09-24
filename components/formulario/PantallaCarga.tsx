import React from 'react'
import Loader from '../Loader'

export default function PantallaCarga() {
  return (
    <div className='min-h-screen bg-[#e7e0e0] grid place-items-center'>
        <div className='grid place-items-center gap-4'>
            <Loader />
            <p className='font-bold text-2xl text-center'>Buscando las mejores opciones para ti. Espera un momento</p>
        </div>
    </div>
  )
}
