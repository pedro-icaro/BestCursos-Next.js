"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import {
  MdOutlineGroups,
  MdOutlineHandshake,
  MdOutlineLocalOffer,
} from "react-icons/md";
import { BiHome, BiSolidBookHeart } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import { CgHome } from "react-icons/cg";
import { listalivros } from "../data/livros";

interface headerprop {
  titulo: string;
  titulo2:string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

export default function Header({ titulo, titulo2, image1, image2, image3,image4  }: headerprop) {
  const rota = usePathname();
  const paginalivros = listalivros.filter((livro) =>
    livro.categoria.includes(rota),
  );

  return (
    <>
      <div className="grid grid-cols-[100px_1fr] h-screen w-screen overflow-hidden">
        <aside className=" bg-olive-200 flex flex-col ">
          <div className="flex justify-center">
            <a href="/home">
              <Image
                src="/logo1.png"
                alt=""
                width={120}
                height={50}
                className=""
              />
            </a>
          </div>
          <nav className="flex flex-col gap-5 p-10 flex-none items-center justify-center mt-10">
            <li
              className={
                rota === "/home"
                  ? "bg-olive-300 flex items-center p-3 rounded-full w-[50]"
                  : "gap-2 p-1 flex items-center"
              }
            >
              <Link href="/home" className="">
                <CgHome size={26} />
              </Link>
            </li>
            <li
              className={
                rota === "/emprestar"
                  ? "bg-olive-300 flex items-center p-3 gap-2 w-[50] rounded-full "
                  : "flex items-center gap-2 p-1"
              }
            >
              <Link href="/emprestar">
                <MdOutlineHandshake size={26} />
              </Link>
            </li>
            <li
              className={
                rota === "/doar"
                  ? "bg-olive-300 flex items-center p-3 gap-2 w-[50] rounded-full "
                  : "flex items-center gap-2 p-1"
              }
            >
              <Link href="/doar">
                <BiSolidBookHeart size={26} />
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
                <MdOutlineLocalOffer size={26} />
              </Link>
            </li>
            <li
              className={
                rota === "/comprar"
                  ? "bg-olive-300 flex items-center p-3 gap-2  w-[50] rounded-full "
                  : "flex items-center p-1 gap-2"
              }
            >
              <Link href="comprar">
                <FiShoppingCart size={26} />
              </Link>
            </li>
            <li
              className={
                rota === "/clube"
                  ? "bg-olive-300 flex items-center p-1 gap-2 w-[160] rounded-2xl "
                  : "flex items-center p-1 gap-2"
              }
            ></li>
          </nav>
          
        </aside>
        <main className="flex flex-col h-full overflow-hidden ">
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
          <div className="flex-1 overflow-y-auto">
          <section className="p-8 ">
            <h1 className="text-2xl font-bold">{titulo}</h1>
          </section>
          <div className="p-5 gap-15 flex " >
            <div className="p-1 hover:border-blue-300/50 border-2 border-transparent rounded-2xl transition-all">
              <Image src={image1} alt="" width={220} height={300} className="rounded-[5px]"/>
            </div>
              
              <Image src={image2} alt="" width={220} height={300} className="rounded-[5px]"/>
              <Image src={image3} alt="" width={220} height={300} className="rounded-[5px]"/>
          </div>
          <section>
            <h1 className="font-bold text-2xl p-8">{titulo2}</h1>
          </section>
          <div className="flex gap-15 p-5">
              <Image src={image3} alt="" width={220} height={300} className="rounded-[5px]"/>
              <Image src={image4} alt="" width={220} height={300} className="rounded-[5px]"/>
          </div>
          </div>
        </main>
      </div>
    </>
  );
}
