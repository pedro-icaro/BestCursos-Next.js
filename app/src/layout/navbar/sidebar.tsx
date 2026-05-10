"use client";

import Link from "next/link";
import {
  
  FaCode,
  FaCss3Alt,
  FaHtml5,
  FaReact,

} from "react-icons/fa";
import { CgHome } from "react-icons/cg";
import { IoLogoFigma } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { usePathname } from "next/navigation";
import { IoMdTrendingUp } from "react-icons/io";

export default function Navbar() {
  const rota = usePathname();

  return (
    <>
      <div className="hidden md:block">
        <a
          href="/components/home"
          className="flex flex-col mt-4 justify-center items-center"
        >
          <FaCode size={40} />
          <h1 className=" font-semibold">DevPro</h1>
        </a>
      </div><br /><br /><br /><br />
      <div className="hidden md:block">
    <nav className="flex md:flex-col gap-5  flex-none items-center justify-center min-h-[70%]">

        <li
          className={
            rota === "/html5"
              ? "bg-olive-300 flex items-center p-3 gap-2 w-[50] rounded-full"
              : "flex items-center gap-2 p-1 hover:ml-[7] transition-[10s] text-lg"
          }
        ><span>
          <Link href="/html5">
            {" "}
            <FaHtml5 size={26} />
            
          </Link>
          </span>
        </li>
        <li
          className={
            rota === "/css3"
              ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
              : "flex items-center p-1 gap-2 hover:ml-[7] transition-[10s] text-lg"
          }
        ><span>
          <Link href="/css3">
            <FaCss3Alt size={26} />
          </Link></span>
        </li>
        <li
          className={
            rota === "/javascriptt"
              ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
              : "flex items-center p-1 gap-2 hover:ml-[7] transition-[10s] text-lg"
          }
        ><span>
          <Link href="/javascriptt">
            <SiJavascript size={22} />
          </Link></span>
        </li>
        <li
          className={
            rota === "/src/pages/home"
              ? "bg-olive-300 flex items-center p-3 rounded-full w-[50]"
              : "gap-2 p-1 flex items-center hover:ml-[7] transition-[10s] text-lg"
          }
        ><span>
          <Link href="/src/pages/home">
            <CgHome size={26} />
          </Link></span>
        </li>        
        <li
          className={
            rota === "/figma"
              ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
              : "flex items-center p-1 gap-2 hover:ml-[7] transition-[10s] text-lg"
          }
        ><span>
          <Link href="/figma">
            <IoLogoFigma size={26} />
          </Link></span>
        </li>
        <li
          className={
            rota === "/react"
              ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
              : "flex items-center p-1 gap-2 hover:ml-[7] transition-[10s] text-lg"
          }
        ><span>

        
          <Link href="/react">
            <FaReact size={26} />
          </Link></span>
        </li>
        <li
          className={
            rota === "/src/pages/apoie-o-projeto"
              ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
              : "flex items-center p-1 gap-2 hover:ml-[7] transition-[10s] text-lg"
          }
        ><span>
          <Link href="/src/pages/apoie-o-projeto">
            <IoMdTrendingUp size={28}/> 
          </Link></span>
        </li>
      </nav>
      </div>
  
    </>
  );
}
