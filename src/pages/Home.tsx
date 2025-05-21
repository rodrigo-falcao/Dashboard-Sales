import {
    AvatarList,
    CardComponent,
    CustomChart,
    CustomTable,
    Header,
} from '@/components'
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
    const mockTableData = {
        headers: ['Name', 'Email', 'Actions'],
        rows: [
            [
                <span>Nome 1</span>,
                <span>nome1@email.com</span>,
                <button>ACTION</button>,
            ],
            [
                <span>Nome 2</span>,
                <span>nome2@email.com</span>,
                <button>ACTION</button>,
            ],
            [
                <span>Nome 3</span>,
                <span>nome3@email.com</span>,
                <button>ACTION</button>,
            ],
        ],
    }
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <CardComponent>CARD</CardComponent>
                <CardComponent>
                    <AvatarList listData={mockListData} />
                </CardComponent>
                <CardComponent>
                    <CustomTable
                        headers={mockTableData.headers}
                        rows={mockTableData.rows}
                    />
                </CardComponent>
                <CardComponent>
                    <CustomChart
                        labels={[
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                        ]}
                        data={[1000.12, 2456.54, 986.32, 654.89, 1234.56]}
                        type="bar"
                    />
                </CardComponent>
            </Container>
        </>
    )
}

export default Home
