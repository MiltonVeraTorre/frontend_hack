
import { GraficaInt } from "@/types/ModelTypes";
import {
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
  } from "recharts";

interface Props{
    titulo:string
    data:GraficaInt[]
}



export default function Grafica({titulo,data}:Props) {
  return (
    <div className="w-full -ml-9">
      <div className="h-44 w-full">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`color`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#b4eaf1" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#fff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
              tick={false}
              dataKey="mes" strokeWidth={1} />
              <YAxis
              tick={false}

                type="number"
                strokeWidth={1}
                domain={["dataMin", "dataMax"]}
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#73eefe"
                activeDot={{ r: 8 }}
                fillOpacity={1}
                fill={`url(#color)`}
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full grid place-items-center">
            <h4 className="text-orange-400 text-lg">
              {" "}
              No hay datos registrados de {titulo}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
}
