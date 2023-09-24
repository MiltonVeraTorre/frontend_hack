import { pasoAnterior, siguientePaso } from "@/redux/slices/formularioSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}

export default function FormularioLayout({ children }: Props) {
  const paso = useSelector((state: RootState) => state.formulario.paso);

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
          <Image
            className="w-full mt-14 -mb-24"
            src="/imagen.png"
            alt="Picture of the author"
            width={300}
            height={500}
          />
        </div>
      </div>
      <div className="bg-[#e7e0e0] h-[60vh] pt-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
