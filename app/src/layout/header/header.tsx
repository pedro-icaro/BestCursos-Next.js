"use client";

import { FaSearch, FaUserCircle } from "react-icons/fa";
import Logo from "../../components/logo/logo";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { CgHome } from "react-icons/cg";

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
       
          {botao === false && (
             <div 
        className="flex flex-col bg-olive-300 p-5 top-0 
        bottom-0 h-full w-[60%] fixed left-0 z-50">
            <nav className="">
              {" "}
              <ul className="flex flex-col h-full gap-2 text-[20px] font-bold">
                <li className="">
                  <Link href="" className="flex items-center gap-1"><CgHome />Home</Link>
                </li>
                <li>
                  <Link href="">Html 5</Link>
                </li>
                <li>
                  <Link href="">Css3</Link>
                </li>
                <li>
                  <Link href="">Javascript</Link>
                </li>
                <li>
                  <Link href="">Figma</Link>
                </li>
                <li>
                  <Link href="">React</Link>
                </li>
              </ul>
            </nav>
            <div className=" w-auto h-auto ">

            </div>
            </div>
          )}
        

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
