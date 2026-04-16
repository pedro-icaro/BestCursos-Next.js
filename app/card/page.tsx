import Image from "next/image";
interface propscards{
  titulocard:string;
  descricao:string;
  capa:string;
}

export default function card({titulocard,descricao,capa}: propscards){
    return(
        <>
        <div className="line-clamp-4">
            <Image
             alt=""
             src={capa} 
             width={400} 
             height={100}
             className="w-full"
             />
             <h1 className="font-bold text-2xl">
                {titulocard}
             </h1>
             <p>
                {descricao}
             </p>
        </div>
        
        </>
    )
}