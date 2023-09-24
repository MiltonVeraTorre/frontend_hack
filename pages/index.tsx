import Estrategia from '@/components/Estrategia'
import { axiosConfig } from '@/config/axiosConfig'
import clienteAxios from '@/config/clienteAxios'
import { fetcher } from '@/config/fetcher'

import React, { useEffect } from 'react'

import useSWR from "swr"

export default function index() {

  const {data} = useSWR<string>("/example",fetcher)


  return (
    <div>
      <Estrategia />

    </div>
  )
}
