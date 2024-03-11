import { useContext, createContext } from "react";

export const ThemeChanger = createContext({
    background: '',
    font: '',
    change:()=>{}
})

export const ThemeProvider = ThemeChanger.Provider

export default function useTheme() {
    return useContext(ThemeChanger)
} 