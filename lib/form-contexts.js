import { useContext, createContext } from "react";

export const StudentTypeContext = createContext(null);

export function useStudentTypeContext() {
    const context = useContext(StudentTypeContext);
    if(!context) {
        throw new Error("useStudentTypeContext must be used within a ThemeContextProvider");
    }

    return context;

}
