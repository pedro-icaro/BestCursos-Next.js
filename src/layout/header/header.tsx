"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import Logo from "../../components/logo/logo";
import SidebarMobile from "../sidebar-mobile/sidebar-mobile";
import { LocalStorage } from "@/shared/services/local-storage";

export default function Header() {
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);
  const [busca, setBusca] = useState("");
  const router = useRouter();
  const [nome, setNome] = useState(() => LocalStorage.Usuario.getNome());
  const handleSearch = () => {
    if (busca.trim()) {
      router.push(`/pesquisa?q=${encodeURIComponent(busca.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const inputProps = {
    value: busca,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setBusca(e.target.value),
    onKeyDown: handleKeyDown,
  };

  return (
    <header className="w-full flex flex-col transition-all">
      <div className="flex items-center justify-between px-6 h-20 w-full">
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setMenuMobileAberto(!menuMobileAberto)}
            className="p-2 text-olive-600 hover:bg-olive-100 rounded-full transition-colors"
          >
            <IoMdMenu size={28} />
          </button>
          <Logo />
        </div>

        <div className="hidden md:flex flex-1 justify-center max-w-2xl px-4">
          <div className="flex items-center w-full bg-gray-100 rounded-full px-4 py-2 border-2 border-transparent focus-within:border-olive-400 focus-within:bg-white transition-all duration-300">
            <FaSearch
              className="text-gray-400 mr-3 cursor-pointer"
              size={18}
              onClick={handleSearch}
            />
            <input
              type="text"
              placeholder="Pesquisar cursos, aulas..."
              className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
              {...inputProps}
            />
          </div>
        </div>

        <div className="flex items-center justify-end md:flex-1">
          <Link href="/perfil" className="flex items-center gap-3 p-2 rounded-full">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-semibold text-gray-800">{nome || "user name"}</span>
              <span className="text-xs text-olive-600 font-medium">Aluno</span>
            </div>
            <FaUserCircle size={38} className="text-gray-400" />
          </Link>
        </div>
      </div>

  
      <div className="md:hidden px-4 pb-4">
        <div className="flex items-center w-full bg-gray-100 rounded-full px-4 py-2 border-2 border-transparent focus-within:border-olive-400 focus-within:bg-white transition-all duration-300">
          <FaSearch className="text-gray-400 mr-3" size={18} onClick={handleSearch} />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="bg-transparent outline-none w-full text-sm text-gray-700"
            {...inputProps}
          />
        </div>
      </div>

      {menuMobileAberto && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMenuMobileAberto(false)}
          />
          <div className="fixed top-0 left-0 h-full z-50">
            <SidebarMobile />
          </div>
        </>
      )}
    </header>
  );
}