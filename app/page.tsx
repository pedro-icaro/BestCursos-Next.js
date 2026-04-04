"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

export default function Login() {
  const router = useRouter();

  function home() {
    router.push("/header");
  }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div
          className=" flex flex-col p-20 rounded-2xl gap-5 shadow-none
        md:shadow-[0_10px_30px_rgb(0,0,0,0.5)] "
        >
          <center>
            <FaUser size="40px" />
          </center>
          <input
            type="text"
            placeholder="Usuario"
            name="usuario"
            className="p-2 focus:ring-4 focus:ring-blue-200/50 focus:border-blue-400
             border-olive-300 border-2 outline-none rounded-[5px]"
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            className="p-2 outline-none border-olive-300 border-2 
            rounded-[5px] focus:ring-4 focus:border-blue-400
             focus:ring-blue-200/50"
          />
          <button
            className=" bg-blue-500 p-1 rounded-2xl text-[18px] font-semibold text-white"
            onClick={home}
          >
            Logar
          </button>
          <div className=" md:flex md:gap-1">
          <p className="flex justify-center">Não tem uma conta? </p>
          <Link
            href="/cadastro"
            className="underline text-blue-500 flex justify-center"
          >
            Cadastre-se
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}
