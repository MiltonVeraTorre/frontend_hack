import clienteAxios from "./clienteAxios";
import { axiosConfig } from "@/utils/axiosConfig";


const config = axiosConfig();
export const fetcher = (url: string) => clienteAxios(url,config ?? {}).then((datos) => datos.data)
