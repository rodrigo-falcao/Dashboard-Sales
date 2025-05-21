import { AvatarList, CardComponent, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
    const mockListData = [
        {
            avatar: '/dnc-avatar.svg',
            name: 'John Doe',
            subtitle: currencyConverter(1234.44),
        },
        {
            avatar: '/dnc-avatar.svg',
            name: 'Jane Smith',
            subtitle: currencyConverter(4634.44),
        },
        {
            avatar: '/dnc-avatar.svg',
            name: 'Alice Johnson',
            subtitle: currencyConverter(2434.44),
        },
    ]
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <CardComponent>CARD</CardComponent>
                <CardComponent>
                    <AvatarList listData={mockListData} />
                </CardComponent>
            </Container>
        </>
    )
}

export default Home
