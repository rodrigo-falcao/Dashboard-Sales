import { AppThemeProvider } from './contexts/appThemeContext.tsx'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles'
import { StrictMode } from 'react'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppThemeProvider>
            <GlobalStyle />
            <App />
        </AppThemeProvider>
    </StrictMode>
)
