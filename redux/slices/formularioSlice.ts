import { Estrategia } from "@/types/ModelTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { crearPropuestas } from "../thunks/formularioThunks";
import { EstrategiasInt } from "@/types/AppTypes";

// Creacion del slice

export const formularioSlice = createSlice({
  name: "formulario",
  initialState: {
    objetivos: [] as string[],
    monto_inicial: 0,
    monto_mensual: 0,
    tiempo_retorno: 0,
    tolerancia: 0,
    estrategias: [] as EstrategiasInt,
    paso: 1,
    cargando: false
  },
  reducers: {
    agregarObjetivo: (state, action: PayloadAction<string>) => {
      // Si el objetivo no esta
      if (!state.objetivos.find((o) => o === action.payload)) {
        state.objetivos.push(action.payload);
        return;
      }
      // Si el objetivo ya esta lo quitamos
      state.objetivos = state.objetivos.filter((o) => o !== action.payload);
    },
    setMontoInicial: (state, action: PayloadAction<number>) => {
      state.monto_inicial = action.payload;
    },
    setMontoMensual: (state, action: PayloadAction<number>) => {
      state.monto_mensual = action.payload;
    },
    setTiempoRetorno: (state, action: PayloadAction<number>) => {
      state.tiempo_retorno = action.payload;
    },
    setTolerancia: (state, action: PayloadAction<number>) => {
      state.tolerancia = action.payload;
    },
    siguientePaso: (state) => {
      state.paso = state.paso + 1;
    },
    pasoAnterior: (state) => {
      state.paso = state.paso - 1;
    },
    setCargando: (state, action: PayloadAction<boolean>) => {
      state.cargando = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(crearPropuestas.pending,(state,action)=>{
      state.cargando = true
    }),
    builder.addCase(crearPropuestas.fulfilled,(state,action)=>{
      state.cargando = false
      state.estrategias = action.payload
    })
  },
});

// Exportacion de las acciones generadas
export const {
  agregarObjetivo,
  setMontoInicial,
  setMontoMensual,
  setTiempoRetorno,
  setTolerancia,
  siguientePaso,
  pasoAnterior,
  setCargando,
} = formularioSlice.actions;

// Exportacion del reducer
export default formularioSlice.reducer;
