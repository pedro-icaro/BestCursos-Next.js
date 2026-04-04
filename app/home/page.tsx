import Image from "next/image";
import { listalivros } from "../data/livros";

export default function home() {
  return (
    <>
    {
      listalivros.map((livro)=>(
        <div key={livro.id}>
          <Image src={livro.capa} alt="" width={220} height={300}/>
        </div>
      ))
    }
    </>
  );
}
