import { pasoAnterior, siguientePaso } from "@/redux/slices/formularioSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}

export default function FormularioLayout({ children }: Props) {
  const paso = useSelector((state: RootState) => state.formulario.paso);

  const videoRef = useRef<any>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
        .catch((error:any) => {
          console.log('Auto-play was prevented:', error);
        });
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      // Carga el nuevo video
      videoRef.current.load();
  
      // Intenta reproducir el video
      videoRef.current.play()
        .catch((error:any) => {
          console.log('Auto-play was prevented:', error);
        });
    }
  }, [paso]);

  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="pb-24 bg-[#e7e0e0]">
        <div className="bg-[#BB0707] w-full grid place-items-center relative">
          {paso !== 1 && (
            <button
              type="button"
              className="fa-solid fa-arrow-left text-slate-50 absolute top-6 left-4 text-lg"
              onClick={() => dispatch(pasoAnterior())}
            ></button>
          )}
          

          
          <video 
          ref={videoRef}
          className="w-full mt-14 -mb-24 rounded-full"
           width="300" height="500" autoPlay controls>
            
          <source src={`/videos/${paso}.mp4`} type="video/mp4"/>

        </video>
        </div>
      </div>
      <div className="bg-[#e7e0e0] h-[60vh] pt-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
