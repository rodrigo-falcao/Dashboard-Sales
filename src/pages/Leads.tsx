import {
    CardComponent,
    CustomTable,
    FormComponent,
    Header,
    StyledH2,
    StyledButton,
    StyledSpan,
    StyledP,
} from '@/components'
import { Container, Grid } from '@mui/material'
import { useState, useEffect, type ChangeEvent } from 'react'

// HOOKS
import { useFormValidation, useGet, usePost, useDelete } from '@/hooks'

// TYPES
import type { InputProps, LeadData, LeadPostData, MessageProps } from '@/types'

function Leads() {
    // HOOKS
    const {
        data: createLeadsData,
        loading: createLeadsLoading,
        error: createLeadsError,
        postData: createLeadsPostData,
    } = usePost<LeadData, LeadPostData>('leads/create', true)

    const {
        data: leadsData,
        loading: leadsLoading,
        error: leadsError,
        getData: getLeads,
    } = useGet<LeadData[]>('leads')

    const { deleteData: leadsDeleteData, loading: leadsDeleteLoading } =
        useDelete('leads/delete')

    // FORMS
    const [createMessage, setCreateMessage] = useState<MessageProps>({
        type: 'success',
        msg: '',
    })
    const clearMessage = () => {
        setTimeout(() => {
            setCreateMessage({ type: 'success', msg: '' })
        }, 3000)
    }
    const inputs: InputProps[] = [
        { name: 'name', type: 'text', placeholder: 'Nome', required: true },
        { name: 'email', type: 'email', placeholder: 'Email', required: true },
        { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
    ]
    const { formValues, formValid, handleChange } = useFormValidation(inputs)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await createLeadsPostData({
            name: String(formValues[0]),
            email: String(formValues[1]),
            phone: String(formValues[2]),
        })
    }
    const handleDelete = async (id: number) => {
        if (confirm('Tem certeza que deseja excluir seu Lead?')) {
            try {
                await leadsDeleteData({ params: { id: id } })
                alert('Lead deletado com sucesso!')
                getLeads()
            } catch (e) {
                alert(
                    'Não foi possível realizar a operação. Entre em contato com nosso suporte.'
                )
            }
        }
    }
    useEffect(() => {
        if (createLeadsData?.id) {
            setCreateMessage({
                type: 'success',
                msg: 'Lead cadastrado com sucesso!',
            })
            getLeads()
            clearMessage()
        } else if (createLeadsError) {
            setCreateMessage({
                type: 'error',
                msg: 'Não foi possível realizar a operação. Entre em contato com nosso suporte.',
            })
        } else {
            clearMessage()
        }
    }, [createLeadsData, createLeadsError])
    return (
        <>
            <Header />
            <Container className="mb-2" maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={7}>
                        <CardComponent
                            className={
                                leadsLoading
                                    ? 'skeleton-loading skeleton-loading-mh-2'
                                    : ''
                            }
                        >
                            {!leadsError && !leadsLoading && (
                                <>
                                    <StyledH2>Meus Leads</StyledH2>
                                    {leadsData?.length ? (
                                        <CustomTable
                                            headers={[
                                                'Nome',
                                                'Email',
                                                'Telefone',
                                                '',
                                            ]}
                                            rows={leadsData.map((lead) => [
                                                <StyledP>{lead.name}</StyledP>,
                                                <StyledP>{lead.email}</StyledP>,
                                                <StyledP>{lead.phone}</StyledP>,
                                                <StyledButton
                                                    className="borderless-alert"
                                                    onClick={() =>
                                                        handleDelete(lead.id)
                                                    }
                                                    disabled={
                                                        leadsDeleteLoading
                                                    }
                                                >
                                                    Excluir
                                                </StyledButton>,
                                            ])}
                                        ></CustomTable>
                                    ) : (
                                        <StyledSpan>
                                            Sem Leads Cadastrado
                                        </StyledSpan>
                                    )}
                                </>
                            )}
                        </CardComponent>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <CardComponent>
                            <StyledH2 className="mb-1">
                                Cadastrar Leads
                            </StyledH2>
                            <FormComponent
                                inputs={inputs.map((input, index) => ({
                                    ...input,
                                    type: input.type,
                                    placeholder: input.placeholder,
                                    value: formValues[index] || '',
                                    onChange: (
                                        e: ChangeEvent<HTMLInputElement>
                                    ) =>
                                        handleChange(
                                            index,
                                            (e.target as HTMLInputElement).value
                                        ),
                                }))}
                                buttons={[
                                    {
                                        className: 'primary',
                                        disabled:
                                            !formValid ||
                                            createLeadsLoading ||
                                            leadsDeleteLoading,
                                        type: 'submit',
                                        onClick: handleSubmit,
                                        children: 'Cadastrar Lead',
                                    },
                                ]}
                                message={createMessage}
                            />
                        </CardComponent>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Leads
