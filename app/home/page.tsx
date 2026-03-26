import Image from "next/image";
import Header from "../header/page";
import { url } from "inspector";

export default function home() {
  return (
    <>
      <Header 
      titulo = "Adicionados Recente"
      titulo2 = "Recomendados"
      image1="http://books.google.com/books/content?id=o28ZAgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api"
      image2="http://books.google.com/books/content?id=HFlXEAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api"
      image3="http://books.google.com/books/content?id=-DgQCwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api"
      image4="http://books.google.com/books/content?id=oNWCEQAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api"
      />
    </>
  );
}
