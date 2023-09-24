import internal from "stream"


export interface Fondo{
    id:number
    nombre:string
    tipo:string
    riesgo:string
    estrategia:string
    disponibilidad:number
    plazomin:number
    tipoinv:string
    minimo:number
    maximo:number
    comision:number
    rendimiento:number
  }