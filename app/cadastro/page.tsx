"use client";

import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

export default function CadastreSe() {
  const rotas = useRouter();

  function home() {
    rotas.push("/header");
  }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div
          className=" flex flex-col p-20 rounded-2xl shadow-none
         gap-5 md:shadow-[0_10px_30px_rgb(0,0,0,0.5)]"
        >
          <center>
            <FaUser size="40px" />
          </center>
          <form action="./php/cadastro.php" method="POST" className = "flex flex-col gap-4">
            <input
              type="text"
              placeholder="Usuario"
              name="usuario"
              className="p-2 focus:ring-4 focus:ring-blue-200/50 focus:border-blue-400
                      border-olive-300 border-2 outline-none rounded-[5px]"
              required        
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              className="p-2 outline-none border-olive-300 border-2 
                      rounded-[5px] focus:ring-4 focus:border-blue-400
                      focus:ring-blue-200/50"
              required        
            />
            <input 
            type="email" 
            name="email" 
            id="" 
            placeholder="Email"
            className="outline-none border-2 border-olive-300 p-2 rounded focus:ring-4 focus:border-blue-400 focus:ring-blue-200/50"
            required/>

            <button
              className=" bg-blue-500 p-1 rounded-2xl text-[18px] font-semibold text-white"
            >
              Cadastre-se
            </button>
          </form>  
        </div>
      </div>
    </>
  );
}
