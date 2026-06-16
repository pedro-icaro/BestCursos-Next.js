"use client";

import { useState, useEffect } from "react";

const etapas = [
  { id: 1, titulo: "Lógica de Programação", desc: "Aprenda a pensar como um programador. Base fundamental para tudo.", duracao: "2-3 semanas" },
  { id: 2, titulo: "HTML", desc: "Estrutura de página web. A base de tudo que você verá na tela.", duracao: "2-3 semanas" },
  { id: 3, titulo: "CSS", desc: "Estilize e deixe suas páginas bonitas. Layout e design.", duracao: "3-4 semanas" },
  { id: 4, titulo: "Responsividade", desc: "Crie sites que funcionam em qualquer dispositivo. Mobile first.", duracao: "2-3 semanas" },
  { id: 5, titulo: "Git", desc: "Controle de versão. Essencial para trabalhar em equipe.", duracao: "1-2 semanas" },
  { id: 6, titulo: "JavaScript", desc: "A linguagem da web. Torne seus projetos interativos.", duracao: "6-8 semanas" },
  { id: 7, titulo: "TypeScript", desc: "JavaScript com superpoderes. Tipagem e segurança.", duracao: "3-4 semanas" },
  { id: 8, titulo: "POO", desc: "Programação Orientada a Objetos. Base para frameworks.", duracao: "2-3 semanas" },
  { id: 9, titulo: "Algoritmos", desc: "Raciocínio lógico e estrutura de dados avançados.", duracao: "3-4 semanas" },
  { id: 10, titulo: "React", desc: "O framework mais popular. Componentes e hooks.", duracao: "8-10 semanas" },
  { id: 11, titulo: "State Management", desc: "Gerenciar estado da aplicação. Context API, Zustand, Redux.", duracao: "3-4 semanas" },
  { id: 12, titulo: "Next.js", desc: "React com superpoderes. SSR, rotas e performance.", duracao: "4-6 semanas" },
  { id: 13, titulo: "Tailwind CSS", desc: "Estilização rápida com classes utilitárias.", duracao: "2-3 semanas" },
  { id: 14, titulo: "Acessibilidade", desc: "ARIA, semantic HTML e inclusão. Sites para todos.", duracao: "2-3 semanas" },
  { id: 15, titulo: "Testes", desc: "Aprenda a testar seu código. Jest, Vitest e mais.", duracao: "3-4 semanas" },
  { id: 16, titulo: "APIs REST", desc: "Integre seu frontend com backend. Fetch, Axios e mais.", duracao: "2-3 semanas" },
];

const layout = [
  { type: "single", id: 1 },
  { type: "branch", left: 2, right: 3 },
  { type: "single", id: 4 },
  { type: "single", id: 5 },
  { type: "branch", left: 6, right: 7 },
  { type: "single", id: 8 },
  { type: "single", id: 9 },
  { type: "branch", left: 10, right: 11 },
  { type: "single", id: 12 },
  { type: "branch", left: 13, right: 14 },
  { type: "branch", left: 15, right: 16 },
];

const TRILHA_KEY = "TRILHA_CONCLUIDAS";

export default function TrilhaPage() {
  const [concluidas, setConcluidas] = useState<Set<number>>(() => {
    if (typeof window === "undefined") return new Set();
    const salvo = localStorage.getItem(TRILHA_KEY);
    return new Set(salvo ? JSON.parse(salvo) : []);
  });
  
  const [expandida, setExpandida] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem(TRILHA_KEY, JSON.stringify(Array.from(concluidas)));
  }, [concluidas]);

  const toggle = (id: number) => {
    const nova = new Set(concluidas);
    nova.has(id) ? nova.delete(id) : nova.add(id);
    setConcluidas(nova);
  };

  const getEtapa = (id: number) => etapas.find(e => e.id === id)!;

  function No({ id }: { id: number }) {
    const etapa = getEtapa(id);
    const isConcluida = concluidas.has(id);
    const isExpandida = expandida === id;

    return (
      <div className="flex flex-col items-center trilha-node">
        <div
          onClick={(e) => { e.stopPropagation(); setExpandida(isExpandida ? null : id); }}
          className={`
            flex items-center gap-3 px-5 py-3 rounded-lg border-2 cursor-pointer
            transition-all duration-200 min-w-[140px] max-w-[200px] w-full
            transform hover:scale-105 active:scale-95
            ${isConcluida
              ? "border-olive-500 bg-olive-50 shadow-md"
              : "border-olive-200 bg-white hover:border-olive-400 hover:shadow-lg"
            }
          `}
        >
          <div className={`
            w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0
            font-bold transition-all
            ${isConcluida ? "bg-olive-500 text-white scale-110" : "bg-olive-100 text-olive-600"}
          `}>
            {isConcluida ? "✓" : id}
          </div>

          <span className={`text-xs font-bold leading-tight flex-1
            ${isConcluida ? "line-through text-gray-400" : "text-gray-900"}
          `}>
            {etapa.titulo}
          </span>
        </div>

        {isExpandida && (
          <div 
            className="mt-2 w-full max-w-[200px] bg-white border-2 border-olive-200 rounded-lg p-3 shadow-lg z-10 trilha-node"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs text-gray-600 leading-relaxed mb-2">{etapa.desc}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
              <span className="font-semibold">Tempo:</span> {etapa.duracao}
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); toggle(id); }}
              className={`
                w-full text-xs font-bold py-2 rounded-md transition-all
                transform hover:scale-105 active:scale-95
                ${isConcluida
                  ? "border border-gray-300 text-gray-600 bg-gray-50 hover:bg-gray-100"
                  : "border border-olive-500 text-white bg-olive-500 hover:bg-olive-600"
                }
              `}
            >
              {isConcluida ? "Desmarcar" : "Concluir"}
            </button>
          </div>
        )}
      </div>
    );
  }

  function LinhaV({ done }: { done: boolean }) {
    return (
      <div className="flex justify-center">
        <div className={`w-0.5 h-8 transition-all duration-300 ${done ? "bg-olive-500" : "bg-gray-200"}`} />
      </div>
    );
  }

  function LinhaH({ done, hasCenter }: { done: boolean; hasCenter: boolean }) {
    const cor = done ? "bg-olive-500" : "bg-gray-200";
    return (
      <div className="relative flex items-center justify-center w-full h-8">
        <div className={`absolute top-1/2 -translate-y-1/2 h-0.5 ${cor} ${hasCenter ? "left-[16%] right-[16%]" : "left-[25%] right-[25%]"}`} />
        <div className={`absolute left-[25%] top-1/2 w-0.5 h-1/2 ${cor}`} />
        {hasCenter && <div className={`absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-1/2 ${cor}`} />}
        <div className={`absolute right-[25%] top-1/2 w-0.5 h-1/2 ${cor}`} />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center" onClick={() => setExpandida(null)}>
          {layout.map((row, idx) => {
            const antId = idx > 0 
              ? (layout[idx - 1].type === "single" 
                  ? layout[idx - 1].id 
                  : layout[idx - 1].center ?? layout[idx - 1].right)
              : null;
            const antDone = antId ? concluidas.has(antId) : false;

            return (
              <div key={idx} className="w-full flex flex-col items-center">
                {idx > 0 && <LinhaV done={antDone} />}

                {row.type === "single" ? (
                  <No id={row.id} />
                ) : (
                  <>
                    <LinhaH done={antDone} hasCenter={row.center !== undefined} />
                    <div className="flex w-full justify-center gap-8 px-4">
                      <No id={row.left} />
                      {row.center !== undefined && <No id={row.center} />}
                      <No id={row.right} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}