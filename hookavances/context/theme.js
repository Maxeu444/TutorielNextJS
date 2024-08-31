'use client'
import { createContext, useContext, useState } from "react"

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    const [background, setBackground] = useState('lightgreen')

    return (
        <ThemeContext.Provider value={{ background, setBackground}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)