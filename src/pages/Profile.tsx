import { AppThemeContext } from '@/contexts/appThemeContext'
import { CardComponent, Header, StyledButton } from '@/components'
import { useContext } from 'react'

function Profile() {
    const ThemeContext = useContext(AppThemeContext)
    return (
        <>
            <Header />
            <CardComponent>
                <StyledButton
                    className="primary"
                    onClick={ThemeContext?.toggleTheme}
                >
                    Trocar para tema{' '}
                    {ThemeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
                </StyledButton>
            </CardComponent>
        </>
    )
}

export default Profile
