"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaCode,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import { CgHome } from "react-icons/cg";
import Section from "../section/page";
import { IoLogoFigma } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";

export default function Header() {
  const rota = usePathname();

  return (
    <>
      <div className="grid grid-cols-[100px_1fr] h-screen w-screen overflow-hidden">
        <aside className=" bg-olive-200 flex flex-col ">
          <div className="">
            <a
              href="/home"
              className="flex flex-col mt-4 justify-center items-center"
            >
              <FaCode size={40} />
              <h1 className=" font-semibold">DevPro</h1>
            </a>
          </div>
          <nav className="flex flex-col gap-5  flex-none items-center justify-center min-h-[70%]">
            <li
              className={
                rota === "/home"
                  ? "bg-olive-300 flex items-center p-3 rounded-full w-[50]"
                  : "gap-2 p-1 flex items-center"
              }
            >
              <Link href="/home">
                <CgHome size={26} />
              </Link>
            </li>
            <li
              className={
                rota === "/vender"
                  ? "bg-olive-300 flex items-center p-3 gap-2 w-[50] rounded-full "
                  : "flex items-center gap-2 p-1"
              }
            >
              <Link href="/vender">
                {" "}
                <FaHtml5 size={26} />
              </Link>
            </li>
            <li
              className={
                rota === "/comprar"
                  ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
                  : "flex items-center p-1 gap-2"
              }
            >
              <Link href="/comprar">
                <FaCss3Alt size={26} />
              </Link>
            </li>
            <li
              className={
                rota === "/comprar"
                  ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
                  : "flex items-center p-1 gap-2"
              }
            >
              <Link href="/comprar">
                <SiJavascript size={20}/>
              </Link>
            </li>
            <li
              className={
                rota === "/comprar"
                  ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
                  : "flex items-center p-1 gap-2"
              }
            >
              <Link href="/comprar">
                <IoLogoFigma size={26} />
              </Link>
            </li>
            <li
              className={
                rota === "/comprar"
                  ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
                  : "flex items-center p-1 gap-2"
              }
            >
              <Link href="/comprar">
                <FaReact size={26} />
              </Link>
            </li>
          </nav>
        </aside>
        <main className="flex flex-col h-full overflow-hidden">
          <header className="">
            <div className="bg-olive-200 flex p-5 items-center">
              <div
                className="flex items-center border-2 rounded-[15px]
            border-olive-300 gap-5 p-1 w-[500]"
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

              <div className=" flex-1 flex gap-3 items-center justify-end overflow-y-auto">
                <FaUserCircle size="40px" className=" " />
                <span>User Name</span>
              </div>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto flex-nowrap p-5">
            <h1 className="font-bold text-3xl p-3">Mais Relevantes</h1>
            <Section />
          </div>
        </main>
      </div>
    </>
  );
}
