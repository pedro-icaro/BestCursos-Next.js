"use client";

import { useState } from "react";
import { HiOutlineChatAlt2 } from "react-icons/hi";

export default function FeedbackSystem() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-olive-100 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-full">
            <HiOutlineChatAlt2 className="text-blue-500 text-2xl" />
          </div>
          <p className=" text-sm">
            <strong className="">O que você está achando?</strong>
            <br /> Ajude-nos a melhorar a plataforma!
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="text-blue-500 font-semibold text-sm hover:text-blue-400"
        >
          Enviar feedback
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-zinc-900 p-6 rounded-2xl w-full max-w-sm border border-zinc-800 shadow-xl">
            <h3 className="text-white font-bold mb-4">Seu Feedback</h3>
            
            <form action="https://formspree.io/f/mwvjyjdz" method="POST" className="flex flex-col gap-4">
              <textarea 
                name="mensagem" 
                required 
                className="w-full bg-zinc-800 rounded-lg p-3 text-white border border-zinc-700"
                placeholder="Escreva aqui..."
              />
              <div className="flex gap-2 justify-end">
                <button type="button" onClick={() => setIsModalOpen(false)} className="text-zinc-400">Cancelar</button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}