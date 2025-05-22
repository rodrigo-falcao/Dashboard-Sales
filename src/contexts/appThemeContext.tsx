import { createContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '@/styles/theme'
import type { AppThemeContextProps } from '@/types'

export const AppThemeContext = createContext<AppThemeContextProps | undefined>(
    undefined
)
export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
    const savedTheme = localStorage.getItem('theme')
    const [appTheme, setAppTheme] = useState(savedTheme ?? 'light')

    const toggleTheme = () => {
        setAppTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        localStorage.setItem('theme', appTheme)
    })

    return (
        <AppThemeContext.Provider value={{ appTheme, toggleTheme }}>
            <ThemeProvider
                theme={appTheme === 'light' ? lightTheme : darkTheme}
            >
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
}
