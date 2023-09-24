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

export interface Estrategia{
  id:number
  nombre:string
  monto_inicial:number
  monto_mensual:number
  tiempo_retorno:number
  rendimiento_anual:number
  riesgo:string
  aceptado:boolean
  ponderacion:Ponderacion[]
  grafica:Grafica[]
}

export interface Grafica{
  id:number
  label:number
  value:number
  estrategiaId:number
}

export interface Ponderacion{
  id:number
  fondoId:number
  estrategiaId:number
  ponderacion:number
}