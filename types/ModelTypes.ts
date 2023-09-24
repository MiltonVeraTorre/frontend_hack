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

export interface EstrategiaInt{
  id:number
  nombre:string
  monto_inicial:number
  monto_mensual:number
  tiempo_retorno:number
  rendimiento_anual:number
  riesgo:string
  aceptado:boolean
  ponderacion:Ponderacion[]
  grafica:GraficaInt[]
}

export interface GraficaInt{
  id:number
  label:number
  value:number
  estrategiaId:number
}

export interface Ponderacion{
  id:number
  fondo:Fondo
  fondoId:number
  estrategiaId:number
  ponderacion:number
}