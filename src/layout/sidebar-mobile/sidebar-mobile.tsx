"use client";

import Link from "next/link";
import { CgHome } from "react-icons/cg";
import { DiJavascript } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaReact, FaUserCircle } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

export default function SidebarMobile() {


  return (
    <>
      <div
        className="flex flex-col bg-olive-300 top-0 
                bottom-0 h-screen w-[60%] fixed left-0 z-50 gap-5 md:hidden"
      >
        <div className="flex gap-3 items-center border-b w-full p-3 mt-[10px] border-olive-600">
          <FaUserCircle size={55} />
          <div>
            <h1 className=" font-semibold text-[20px]">Olá,</h1>
            <h2>Nome do usúario</h2>
          </div>
        </div>
        <nav className="p-5">
          {" "}
          <ul className="flex flex-col h-full gap-4 text-[20px]">
            <li className="">
              <Link href="/home" className="flex items-center gap-3">
                <CgHome size={28} />
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-3">
                <FaHtml5 size={28} /> Html 5
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-3">
                <FaCss3Alt size={28} /> Css3
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-3">
                <DiJavascript size={30} /> Javascript
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-3">
                {" "}
                <IoLogoFigma size={27} /> Figma
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-3">
                <FaReact size={26} /> React
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-3">
                <IoMdTrendingUp size={28} /> Apoie o projeto!
              </Link>
            </li>{" "}
          </ul>
          <div className="h-full flex justify-end flex-col">
            <li className="flex items-center gap-3">
              <MdLogout size={25}/> <span className="text-[18px]">Sair</span>
            </li>
          </div>
        </nav>
      </div>

    </>
  );
}
