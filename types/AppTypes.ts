import { GraficaInt } from "./ModelTypes";

export type FondoInt = {
    id: number;
    nombre: string;
    tipo_fondo: string;
    riesgo: string;
    riesgo_n: number;
    estrategia: string;
    disponibilidad: number;
    plazo_minimo: number;
    monto_minimo: string;
    tipo_inversion: string;
    rendimiento: Rendimiento[];
}

type Rendimiento = {
    id: number;
    limite_inferior: number;
    limite_superior: number | null;
    comision: string;
    rendimiento: string;
    fondoId: number;
}

type Propuesta = {
    porcentaje: number;
    fondo: FondoInt;
}

export type EstrategiaInt = {
    propuesta: Propuesta[];
    rendimientoAnualPromedio: string;
    riesgoPromedio: string;
    grafica: GraficaInt[];
}

export type EstrategiasInt = EstrategiaInt[];
