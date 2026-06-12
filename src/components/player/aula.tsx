import { MdCheckCircle, MdPlayCircleOutline } from "react-icons/md";

export interface PropsPlayer {
  title: string;
  done: boolean;
  play: boolean;
  onPlay: () => void;
  onCheck: () => void;
}

export default function PlayerAula({ title, play, done, onPlay, onCheck }: PropsPlayer) {
  return (
    <div className="flex items-center">

      <button className="flex flex-1 gap-3 p-2 ml-3 items-center" onClick={onPlay}>
        <MdPlayCircleOutline size={24} />
        <div className="flex flex-col gap-1 items-start">
          <p
            data-done={done}
            className="line-clamp-2 text-start data-[done=true]:text-green-600"
          >
            {title}
          </p>
          {play && (
            <span className="px-2 text-[14px] text-white bg-blue-400 rounded-full">
              Reproduzindo
            </span>
          )}
        </div>
      </button>

      <button onClick={onCheck} className="p-2">
        <MdCheckCircle
          size={24}
          className={done ? "text-green-600" : "text-gray-300"}
        />
      </button>

    </div>
  );
}