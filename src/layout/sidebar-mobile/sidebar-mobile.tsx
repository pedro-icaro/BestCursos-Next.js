"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgHome } from "react-icons/cg";
import { FiBook, FiMap, FiAward, FiSettings } from "react-icons/fi";
import { IoMdTrendingUp } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const menuPrincipal = [
  { nome: "Início", rota: "/home", icone: CgHome },
  { nome: "Meus Cursos", rota: "/meus-cursos", icone: FiBook },
  { nome: "Trilhas", rota: "/trilhas", icone: FiMap },
  { nome: "Cursos concluidos", rota: "/cursos-concluidos", icone: FiAward },
  { nome: "Apoio ao projeto", rota: "/apoio-ao-projeto", icone: IoMdTrendingUp },
];

export default function SidebarMobile() {
  const rotaAtual = usePathname();

  return (
    <div className="flex flex-col bg-white h-screen w-[75%] max-w-[300px] fixed left-0 top-0 z-50 md:hidden shadow-2xl">
      <div className="flex gap-4 items-center border-b border-gray-100 p-6 bg-olive-50">
        <FaUserCircle size={55} className="text-gray-400" />
        <div className="flex flex-col">
          <div className="flex ">
            <h1 className="text-sm text-gray-500 font-medium">Olá,</h1>
            <h1 className="text-sm text-gray-500 font-medium">use name</h1>
          </div>
          <h2 className="font-semibold text-[18px] text-gray-800 leading-tight">
            Aluno
          </h2>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="flex flex-col gap-2">
          {menuPrincipal.map((item) => {
            const Icone = item.icone;
            const estaAtivo = rotaAtual === item.rota;

            return (
              <li key={item.rota}>
                <Link
                  href={item.rota}
                  className={`
                    flex items-center gap-4 p-3 rounded-xl transition-colors duration-200 text-[18px] font-medium
                    ${
                      estaAtivo
                        ? "bg-olive-100"
                        : ""
                    }
                  `}
                >
                  <Icone size={24} />
                  {item.nome}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-gray-100 p-4 flex flex-col gap-2 bg-white">
        <Link
          href="/configuracoes"
          className="flex items-center gap-4 p-3 rounded-xl text-[18px] font-medium"
        >
          <FiSettings size={24} />
          Configurações
        </Link>
        <button className="flex items-center gap-4 p-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors w-full text-[18px] font-medium text-left">
          <MdLogout size={24} />
          Sair
        </button>
      </div>
    </div>
  );
}
