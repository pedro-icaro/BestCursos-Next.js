import Image from "next/image";
import Link from "next/link";

interface propscards {
  titulocard: string;
  descricao: string;
  capa: string;
  href:string;
}

export default function card({ titulocard, descricao, capa,href}: propscards) {
  return (
    <>
      <Link href={href}>
        <div
          className=" hover:bg-olive-200 transition-all w-80 md:w-100 
         duration-200 hover:mt-[-2] ease-in-out p-1.5 rounded-2xl"
        >
          <Image
            alt=""
            src={capa}
            width={400}
            height={100}
            className=" rounded-[5]"
          />
          <h1 className="font-bold text-2xl">{titulocard}</h1>
          <p className=" line-clamp-3">{descricao}</p>
        </div>
      </Link>
    </>
  );
}
