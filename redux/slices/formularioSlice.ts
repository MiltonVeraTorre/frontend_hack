import { Estrategia } from "@/types/ModelTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


// Creacion del slice

export const formularioSlice = createSlice({
  name: "formulario",
  initialState: {
    objetivos:[] as string[],
    monto_inicial:0,
    monto_mensual:0,
    tiempo_retorno:0,
    tolerancia:0,
    estrategias:[] as Estrategia[]

  },
  reducers: {
    agregarObjetivo:(state,action:PayloadAction<string>)=>{
        // Si el objetivo no esta
        if(!state.objetivos.find(o=>o===action.payload)){
            state.objetivos.push(action.payload)
            return
        }
        // Si el objetivo ya esta lo quitamos
        state.objetivos = state.objetivos.filter(o=>o!==action.payload)
    },
    setMontoInicial:(state,action:PayloadAction<number>)=>{
        state.monto_inicial = action.payload
    },
    setMontoMensual:(state,action:PayloadAction<number>)=>{
        state.monto_mensual = action.payload
    },
    setTiempoRetorno:(state,action:PayloadAction<number>)=>{
        state.tiempo_retorno = action.payload
    },
    setTolerancia:(state,action:PayloadAction<number>)=>{
        state.tolerancia = action.payload
    }
  },
  
});

// Exportacion de las acciones generadas
export const {agregarObjetivo,setMontoInicial,setMontoMensual,setTiempoRetorno,setTolerancia} = formularioSlice.actions;

// Exportacion del reducer
export default formularioSlice.reducer;
