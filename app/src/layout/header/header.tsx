"use client";

import { FaSearch, FaUserCircle } from "react-icons/fa";
import Logo from "../../components/logo/logo";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import SidebarMobile from "../sidebar-mobile/sidebar-mobile";

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
        <div className=" flex-1 flex gap-3 items-center justify-end overflow-y-auto">
          <FaUserCircle size="40px" className=" " />
          <span className=" hidden md:block">User Name</span>
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
    </>
  );
}
