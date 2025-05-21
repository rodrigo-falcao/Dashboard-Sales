import { Avatar, Box, Container } from '@mui/material'
import { pxToRem } from '@/utils'
import styled from 'styled-components'
import { Logo } from '@/components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.appBackground};
    border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefaultStoke};
    margin-bottom: ${pxToRem(37)};
    width: 100%;
`

function Header() {
    return (
        <StyledHeader>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: pxToRem(64),
                    }}
                >
                    <Link to="/home">
                        <Logo height={30} width={73} />
                    </Link>
                    <Link to="perfil">
                        <Avatar
                            alt="DNC Avatar"
                            src="/dnc-avatar.svg"
                            sx={{
                                width: pxToRem(40),
                                height: pxToRem(40),
                            }}
                        />
                    </Link>
                </Box>
            </Container>
        </StyledHeader>
    )
}

export default Header
