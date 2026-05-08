"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { MdCheck, MdContentCopy } from "react-icons/md";

interface ComparProps {
    title:string;
    content:string;
    children:React.ReactNode;
}

export default function Compartilhar({title, content, children}: ComparProps){
   
    const [copiado,setcopiado] = useState(false)
   const textocopiado = () => {
    setcopiado(true)
    window.navigator.clipboard.writeText(content)
   }

    return(
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                 {children}
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className="flex flex-col bg-olive-300 rounded-[8]
                 p-4 gap-3 border-2">
                    <span className=" font-semibold">{title}</span>

                    <div className=" flex items-center gap-2 ">
                        <input 
                        type="text" 
                        value={content}
                        readOnly
                        className=" bg-olive-400 p-1 px-2 rounded outline-olive-500"
                        autoFocus
                        onFocus={e => e.target.select()}
                        />

                        <button onClick={textocopiado}>
                           {copiado === true ? <MdCheck/> : <MdContentCopy />} 
                        </button>
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}