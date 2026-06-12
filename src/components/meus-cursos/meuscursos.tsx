// components/favorito/favorito.tsx
"use client";

import { useState } from "react";
import { MdStar, MdStarOutline } from "react-icons/md";
import { LocalStorage, PropsFavoritoCurso } from "@/shared/services/local-storage";

interface PropsFavorito {
  course: PropsFavoritoCurso;
}

export default function MeusCursosComponents({ course }: PropsFavorito) {
  const [favoritado, setFavoritado] = useState(() =>
    LocalStorage.Favoritos.isFavorite(course.courseId)
  );

  const handleToggle = () => {
    LocalStorage.Favoritos.toggle(course);
    setFavoritado(prev => !prev);
  };

  return (
    <button onClick={handleToggle}>
      {favoritado
        ? <MdStar size={32} className="text-yellow-400" />
        : <MdStarOutline size={32} className="text-gray-400" />
      }
    </button>
  );
}