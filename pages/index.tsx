import { axiosConfig } from '@/config/axiosConfig'
import clienteAxios from '@/config/clienteAxios'
import { fetcher } from '@/config/fetcher'

import React, { useEffect } from 'react'

import useSWR from "swr"

export default function index() {

  const {data} = useSWR<string>("/example",fetcher)


  return (
    <div>
      <button
        type='button'
        className='bg-slate-800 p-4 text-slate-50 rounded font-bold text-xl '
        
      >
        Accion
      </button>

    </div>
  )
}
