"use client";

import { FaSearch, FaUserCircle } from "react-icons/fa";
import Logo from "../../components/logo/logo";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import SidebarMobile from "../sidebar-mobile/sidebar-mobile";
import Link from "next/link";

export default function Header() {
  const [botao, setbotao] = useState(false);
  return (
    <>
      <div className="bg-olive-200 flex p-5 items-center gap-3 h-20 justify-center">
        <div className="block md:hidden">
          <button onClick={() => setbotao(!botao)}>
            <IoMdMenu size={25} />
          </button>
        </div>

        <div className=" block md:hidden">
          <Logo />
        </div>

        {botao === true && <SidebarMobile />}

        <div className="hidden md:block">
          <div
            className="flex items-center border-2 rounded-[15px]
                border-olive-300 gap-5 p-1 md:w-[500] mt-2"
          >
            <FaSearch
              size="20px"
              className="text-olive-600 flex items-center "
            />

            <input
              type="text"
              placeholder="Pesquisa"
              className=" outline-none w-full"
            />
          </div>
        </div>
        <div className=" flex-1 flex gap-3 justify-end">
          <Link href="/src/pages/perfil" className="flex items-center gap-2">
            {" "}
            <FaUserCircle size="40px"/>
            <span className=" hidden md:block">User Name</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-center bg-olive-200 py-10 mt-[-30] rounded-b-[30] md:rounded-none md:py-5">
        <div className="block md:hidden">
          <div
            className="flex items-center border-2 rounded-[15px]
                border-olive-300 gap-5 p-1 w-95 "
          >
            <FaSearch
              size="20px"
              className="text-olive-600 flex items-center "
            />

            <input
              type="text"
              placeholder="Pesquisa"
              className="outline-none"
            />
          </div>
        </div>
      </div>
      {botao === true && (
        <div className="fixed right-0 top-0 w-41 h-full z-40">
          <button
            className="w-full h-full"
            onClick={() => setbotao(false)}
          ></button>
        </div>
      )}
    </>
  );
}
