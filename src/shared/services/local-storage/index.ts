const LOCAL_STORAGE_KEY = "KEEP_WATCHING"

export interface PropsContinuarCurso{
  classId: string;
  courseId: string;
  className: string;
  courseName: string;
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
    }
}