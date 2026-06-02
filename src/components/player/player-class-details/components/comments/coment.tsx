import Image from "next/image";
import { MdArrowDropDown, MdThumbUp } from "react-icons/md";

export default function Comment() {
  return (
    <div className="flex gap-2 items-start">
      
        <Image
        src="https://i.pinimg.com/736x/c8/7e/2f/c87e2f90bce2cb3382ced275fe75d8ef.jpg"
          alt="imagem de perfil"
          width={50}
          height={50}
          className=""
          draggable={false}
        />
      
      <div className=" bg-olive-300 flex-1 flex flex-col gap-4 p-2 rounded-[4]">
        <div className="flex gap-2 items-center">
          <span className="font-bold">user name</span>
          <span className="font-semibold text-xs text-olive-800 opacity-50">
            12/12/2004 ás 19:20
          </span>
        </div>
        <div>coment</div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <MdThumbUp /> <span>5</span>
          </div>
          <button className="flex items-center font-semibold">
            <MdArrowDropDown />
            <span>Ver respostas (5)</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
