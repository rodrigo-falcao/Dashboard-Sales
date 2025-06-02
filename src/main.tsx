import { AppThemeProvider } from './contexts/appThemeContext.tsx'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles'
import { StrictMode } from 'react'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './redux/index.ts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <AppThemeProvider>
                <GlobalStyle />
                <App />
            </AppThemeProvider>
        </Provider>
    </StrictMode>
)
