import Link from "next/link";
import { FaCode } from "react-icons/fa";

export default function Logo() {
  return (
    <div>
      <Link
        href="/components/home"
        className="flex  items-center gap-2"
      >
        <FaCode size={35} />
        <h1 className=" font-semibold text-[20px]">DevPro</h1>
      </Link>
    </div>
  );
}
