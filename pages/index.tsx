
import Estrategia from '@/components/estrategia/Estrategia'

import { fetcher } from '@/config/fetcher'
import { EstrategiaInt } from '@/types/ModelTypes'
import Link from 'next/link'


import React, { useEffect } from 'react'

import useSWR from "swr"

export default function index() {

  const {data} = useSWR<EstrategiaInt[]>("/estrategia",fetcher)


  return (
    <div className="bg-[#E7E0E0] h-screen py-4">
      <div className=" font-bold text-[36px] px-6">Mis Estrategias</div>

      <div className="grid grid-cols-2 place-items-center gap-2 p-2">
        

       {data && (
        data.map((estrategia)=>(
          <Estrategia 
          key={estrategia.id}
          estrategia={estrategia}
          />
        ))
       )}

       <Link 
        href={"/formulario"}
        className='grid place-items-center h-44 rounded-lg  bg-gray-50 w-full'
       >
        <i className='fa-solid fa-plus text-gray-500 text-5xl'></i>
       </Link>
      </div>


    </div>
  );
}
