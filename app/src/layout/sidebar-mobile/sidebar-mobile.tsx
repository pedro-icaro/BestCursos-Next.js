"use client";

import Link from "next/link";
import { CgHome } from "react-icons/cg";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { SiJavascript } from "react-icons/si";

export default function SidebarMobile() {
  return (
    <>
      <div
        className="flex flex-col bg-olive-300 p-5 top-0 
                bottom-0 h-full w-[60%] fixed left-0 z-50 "
      >
        <nav className="">
          {" "}
          <ul className="flex flex-col h-full gap-2 text-[20px] font-bold ">
            <li className="">
              <Link href="" className="flex items-center gap-1">
                <CgHome size={28} />
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-1">
                <FaHtml5 size={28} /> Html 5
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-1">
                <FaCss3Alt size={28} /> Css3
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-1">
                <SiJavascript size={22} /> Javascript
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-1">
                {" "}
                <IoLogoFigma size={28} /> Figma
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-1">
                <FaReact size={28} /> React
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-1">
                <IoMdTrendingUp size={28} /> Apoie o projeto!
              </Link>
            </li>{" "}
            <li className="flex h-full items-center gap-1">
              <MdLogout /> Sair
            </li>
          </ul>
        </nav>
        
      </div>
    </>
  );
}
