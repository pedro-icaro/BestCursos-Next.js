import { format, parseISO } from "date-fns";
import Image from "next/image";
import { useMemo, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp, MdThumbUp } from "react-icons/md";

export interface PropsComment {
  content: string;
  likeCount: number;
  publishDate: string;
  author: {
    image: string;
    userName: string;
  };
  replies?: PropsComment[];
}
export default function Comment({content,likeCount,author,publishDate,replies}:PropsComment) {
  const [respostacomentarios, setrespostacomentarios] = useState(false);

const date = useMemo(() => {
  const dateAsDate = parseISO(publishDate);
  return format(dateAsDate, "dd/MM/yyyy 'às' HH:mm");
}, [publishDate]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-start">
        <Image
          src={author.image}
          alt="imagem de perfil"
          width={50}
          height={50}
          className=""
          draggable={false}
        />
        <div className=" bg-olive-300 flex-1 flex flex-col gap-4 p-2 rounded-[4]">
          <div className="flex gap-2 items-center">
            <span className="font-bold">{author.userName}</span>
            <span className="font-semibold text-xs text-olive-800 opacity-50">
              {date}
            </span>
          </div>
          <div>{content}</div>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <MdThumbUp /> <span>{likeCount}</span>
            </div>
            <button
              className="flex items-center font-semibold"
              onClick={() => setrespostacomentarios(!respostacomentarios)}
            >
              {respostacomentarios ? <MdArrowDropUp /> : <MdArrowDropDown />}
              <span>
                {respostacomentarios ? "Ocutar" : "Ver"} respostas ({replies?.length})
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="pl-12">
        {respostacomentarios && replies?.map(reply => (
                  <Comment key={reply.publishDate} {...reply}/>
        ))}

        </div>
    </div>
  );
}
