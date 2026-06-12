// app/perfil/page.tsx
"use client";

import { useState } from "react";
import { LocalStorage } from "@/shared/services/local-storage";
import { useRouter } from "next/navigation";

export default function PerfilPage() {
  const [nome, setNome] = useState(() => LocalStorage.Usuario.getNome());
  const [salvo, setSalvo] = useState(false);
  const router = useRouter();

  const handleSalvar = () => {
    LocalStorage.Usuario.setNome(nome);
    setSalvo(true);
    setTimeout(() => setSalvo(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6 p-6 max-w-md mx-auto">
      <h1 className="font-bold text-2xl">Meu Perfil</h1>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Seu nome</label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome..."
          className="border rounded-lg px-4 py-2 outline-none focus:border-olive-400"
        />
      </div>

      <button
        onClick={handleSalvar}
        className="bg-olive-400 text-white rounded-lg px-4 py-2 font-medium"
      >
        {salvo ? "Salvo! ✅" : "Salvar"}
      </button>
    </div>
  );
}