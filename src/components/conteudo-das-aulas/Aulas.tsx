import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

interface AulasProps {
  title: string;
  playerUrl: string;
}

export default function Aulas({ title, playerUrl }: AulasProps) {
  return (
    <div>
      <Link
        href={playerUrl}
        className={`flex items-center gap-2 bg-olive-200  p-2 ${title}`}
      >
        <MdPlayCircleOutline size={24} />
        {title}
      </Link>
    </div>
  );
}
