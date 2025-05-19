import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { GlobalStyle, lightTheme } from './styles'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </StrictMode>
)
