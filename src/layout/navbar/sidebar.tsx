"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgHome } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { FiBook, FiMap, FiAward } from "react-icons/fi";
import { IoMdTrendingUp } from "react-icons/io";

const menuPrincipal = [
  { nome: "Início", rota: "/home", icone: CgHome },
  { nome: "Cursos", rota: "/cursos", icone: FiBook },
  { nome: "Trilhas", rota: "/trilhas", icone: FiMap },
  { nome: "Favoritos", rota: "/meus-cursos", icone: FiAward },
  { nome: "Meu progresso", rota: "/meu-progresso", icone: IoMdTrendingUp },
];

export default function Navbar() {
  const rotaAtual = usePathname();

  return (
    <aside className="hidden md:flex flex-col h-screen py-8 bg-white items-center justify-between min-w-[80px] border-r dark:border-gray-200">
      <div className="flex flex-col items-center">
        <Link href="/home" className="flex flex-col justify-center items-center group">
          <FaCode size={36} className="group-hover:scale-110 transition-transform duration-300" />
          <h1 className="font-semibold mt-1">DevPro</h1>
        </Link>
      </div>
      <nav className="flex flex-col w-full flex-1 mt-10">
        <ul className="flex flex-col gap-6 w-full items-center">
          {menuPrincipal.map((item) => {
            const Icone = item.icone;
            const estaAtivo = rotaAtual === item.rota;

            return (
              <li key={item.rota} className="flex justify-center">
                <Link
                  href={item.rota}
                  title={item.nome}
                  className={`
                    flex items-center justify-center p-3 rounded-full transition-all duration-300
                    ${estaAtivo 
                      ? " bg-olive-200"
                      : "hover:bg-gray-100 hover:text-gray-900 hover:scale-110"}
                  `}
                >
                  <Icone size={26} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

    </aside>
  );
}