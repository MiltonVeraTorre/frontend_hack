import Image from "next/image";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function FormularioLayout({ children }: Props) {
  return (
    <div className="">
      <div className="bg-[#BB0707] w-full grid place-items-center">
        
        <Image
          className="w-full mt-14 -mb-28"
          src="/imagen.png"
          alt="Picture of the author"
          width={300}
          height={500}
        />
      </div>
      <div className="bg-[#e7e0e0] h-[60vh] pt-36">{children}</div>
    </div>
  );
}
