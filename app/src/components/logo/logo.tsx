import { FaCode } from "react-icons/fa";

export default function Logo() {
  return (
    <div>
      <a
        href="/components/home"
        className="flex flex-col mt-4 justify-center items-center"
      >
        <FaCode size={35} />
        <h1 className=" font-semibold">DevPro</h1>
      </a>
    </div>
  );
}
