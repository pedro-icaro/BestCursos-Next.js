import Image from "next/image";
import Link from "next/link";

interface propscards {
  title: string;
  description: string;
  image: string;
  href:string;
}

export default function card({ title, description, image ,href }: propscards) {
  return (
    <>
      <Link href={href}>
        <div
          className=" hover:bg-olive-200 transition-all w-80 md:w-100 
         duration-200 hover:mt-[-2] ease-in-out p-1.5 rounded-2xl line-clamp-5"
        >
          <Image
            alt=""
            src={image}
            width={400}
            height={100}
            className=" rounded-[5]"
          />
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className=" ">{description}</p>
        </div>
      </Link>
    </>
  );
}
