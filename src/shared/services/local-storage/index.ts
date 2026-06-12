
const LOCAL_STORAGE_KEY = "KEEP_WATCHING"
const FAVORITES_KEY = "FAVORITE_COURSES"
const DONE_CLASSES_KEY = "DONE_CLASSES";
const USER_NAME_KEY = "USER_NAME";


export interface PropsContinuarCurso{
  classId: string;
  courseId: string;
  className: string;
  courseName: string;
}
export interface PropsFavoritoCurso {
  courseId: string;
  courseTitle: string;
  courseImage: string;
}

export const LocalStorage = {
    ContinuarCurso: {
        get: (): PropsContinuarCurso | null => {
            try {
                const result = window.localStorage.getItem(LOCAL_STORAGE_KEY);
                if (result) {
                    return JSON.parse(result);
                }
                return null;
            } catch {
                return null;
            }
        },
        set: (data: PropsContinuarCurso) => {
            try {
                window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
            } catch (error) {
                return;
            }
        }
    },
Favoritos: {
    get: (): PropsFavoritoCurso[] => {
      try {
        if (typeof window === "undefined") return [];
        const result = window.localStorage.getItem(FAVORITES_KEY);
        return result ? JSON.parse(result) : [];
      } catch {
        return [];
      }
    },
    toggle: (course: PropsFavoritoCurso) => {
      try {
        const favoritos = LocalStorage.Favoritos.get();
        const jaFavoritado = favoritos.some(f => f.courseId === course.courseId);

        const novos = jaFavoritado
          ? favoritos.filter(f => f.courseId !== course.courseId) // remove
          : [...favoritos, course]; // adiciona

        window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(novos));
      } catch {
        return;
      }
    },
    isFavorite: (courseId: string): boolean => {
      return LocalStorage.Favoritos.get().some(f => f.courseId === courseId);
    }
  },
   AulasConcluidas: {
    get: (courseId: string): string[] => {
      try {
        if (typeof window === "undefined") return [];
        const result = window.localStorage.getItem(`${DONE_CLASSES_KEY}_${courseId}`);
        return result ? JSON.parse(result) : [];
      } catch {
        return [];
      }
    },
    save: (courseId: string, classIds: string[]) => {
      try {
        window.localStorage.setItem(`${DONE_CLASSES_KEY}_${courseId}`, JSON.stringify(classIds));
      } catch {
        return;
      }
    }
  },
   Usuario: {
    getNome: (): string => {
      try {
        if (typeof window === "undefined") return "";
        return window.localStorage.getItem(USER_NAME_KEY) || "";
      } catch {
        return "";
      }
    },
    setNome: (nome: string) => {
      try {
        window.localStorage.setItem(USER_NAME_KEY, nome);
      } catch {
        return;
      }
    }
  }
    
}