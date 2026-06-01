import dynamic from "next/dynamic";
import {UrlMatcher} from "interweave-autolink";
import { useMemo } from "react";

const Interweave = dynamic(
  () => import("interweave").then((result) => result.Interweave),
  { ssr: false },
);

interface PropsClassHeader {
  title: string;
  description: string;
}
export default function PlayerClassHeader({
  description,
  title,
}: PropsClassHeader) {

    const urlMather = useMemo(() => {
        return new UrlMatcher(
            "urlMatcher",
            {validateTLD: false},
            ({url}) => (
                <a href={url} target="_blank" className="text-blue-600">
                    {url}
                </a>
            )
        );
    }, [])

  return (
    <div className="flex flex-col gap-2">
      <h3 className=" font-semibold text-lg">{title}</h3>
      <Interweave content={description} matchers={[urlMather]}/>
    </div>
  );
}
