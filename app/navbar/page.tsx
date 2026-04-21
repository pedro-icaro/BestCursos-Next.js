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
import { HiOutlinePresentationChartLine } from "react-icons/hi";

export default function Navbar() {
  const rota = usePathname();

  return (
    <>
      <div className="hidden md:block">
        <a
          href="/home"
          className="flex flex-col mt-4 justify-center items-center"
        >
          <FaCode size={40} />
          <h1 className=" font-semibold">DevPro</h1>
        </a>
      </div>
      <nav className="flex md:flex-col gap-5  flex-none items-center justify-center min-h-[70%]">

        <li
          className={
            rota === "/html5"
              ? "bg-olive-300 flex items-center p-3 gap-2 w-[50] rounded-full "
              : "flex items-center gap-2 p-1"
          }
        >
          <Link href="/html5">
            {" "}
            <FaHtml5 size={26} />
          </Link>
        </li>
        <li
          className={
            rota === "/css3"
              ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
              : "flex items-center p-1 gap-2"
          }
        >
          <Link href="/css3">
            <FaCss3Alt size={26} />
          </Link>
        </li>
        <li
          className={
            rota === "/javascriptt"
              ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
              : "flex items-center p-1 gap-2"
          }
        >
          <Link href="/javascriptt">
            <SiJavascript size={20} />
          </Link>
        </li>
        <li
          className={
            rota === "/home"
              ? "bg-olive-300 flex items-center p-3 rounded-full w-[50] mt-[-20] "
              : "gap-2 p-1 flex items-center"
          }
        >
          <Link href="/home">
            <CgHome size={26} />
          </Link>
        </li>        
        <li
          className={
            rota === "/figma"
              ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
              : "flex items-center p-1 gap-2"
          }
        >
          <Link href="/figma">
            <IoLogoFigma size={26} />
          </Link>
        </li>
        <li
          className={
            rota === "/react"
              ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
              : "flex items-center p-1 gap-2"
          }
        >
          <Link href="/react">
            <FaReact size={26} />
          </Link>
        </li>
        <li
          className={
            rota === "/apoie-o-projeto"
              ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
              : "flex items-center p-1 gap-2"
          }
        >
          <Link href="/apoie-o-projeto">
            <HiOutlinePresentationChartLine size={28} />
          </Link>
        </li>
      </nav>
    </>
  );
}
