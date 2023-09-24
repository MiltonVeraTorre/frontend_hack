import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { handleError } from "@/utils/errorHandler";
import clienteAxios from "@/config/clienteAxios";
import { axiosConfig } from "@/config/axiosConfig";


export const crearPropuestas =  createAsyncThunk(
    "formulario/crearPropuestas",
    async (arg, thunkAPI) => {
        const state = thunkAPI.getState() as RootState
        const {objetivos, monto_inicial, monto_mensual, tiempo_retorno, tolerancia} = state.formulario

        try {
            const config = axiosConfig()
            if(!config){
                throw new Error("Error de configuracion")
            }
            const {data} = await clienteAxios.post("/estrategia",{
                objetivos,
                monto_inicial,
                monto_mensual,
                tiempo_retorno,
                tolerancia
            },config)

            return data
            
        } catch (error:any) {
             handleError(error)
        }

    }
)


export const seleccionarPropuesta = createAsyncThunk(
    "formulario/seleccionarPropuesta",
    async (id:number) => {


        try {
            const config = axiosConfig()
            if(!config){
                throw new Error("Error de configuracion")
            }
            const {data} = await clienteAxios.post(`/estrategia/elegir/${id}`,{},config)

            return data
            
        } catch (error:any) {
             handleError(error)
        }
    }
)