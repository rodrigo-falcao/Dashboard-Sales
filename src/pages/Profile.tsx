import { AppThemeContext } from '@/contexts/appThemeContext'
import { useContext, useEffect, useState, type ChangeEvent } from 'react'
import Cookies from 'js-cookie'

// COMPONENTS
import {
    CardComponent,
    FormComponent,
    Header,
    StyledH2,
    StyledButton,
} from '@/components'
import { Container, Grid } from '@mui/material'

// HOOKS
import { useFormValidation, useGet, usePut, useDelete } from '@/hooks'

// SERVICES
import { logout } from '@/services'

// TYPES
import type {
    InputProps,
    ProfileData,
    ProfileEditableData,
    MessageProps,
} from '@/types'

function Profile() {
    const ThemeContext = useContext(AppThemeContext)

    // HOOKS
    const [updateMessage, setUpdateMessage] = useState<MessageProps>({
        type: 'success',
        msg: '',
    })
    const clearMessage = () => {
        setTimeout(() => {
            setUpdateMessage({ type: 'success', msg: '' })
        }, 3000)
    }
    const {
        data: profileData,
        loading: profileLoading,
        error: profileError,
    } = useGet<ProfileData>('profile')

    const {
        data: profileUpdateData,
        putData: profilePutData,
        loading: profileUpdateLoading,
        error: profileUpdateError,
    } = usePut<ProfileEditableData>('profile/update')

    const { deleteData: profileDeleteData, loading: profileDeleteLoading } =
        useDelete('profile/delete')

    useEffect(() => {
        if (profileData) {
            handleChange(0, profileData.name)
            handleChange(1, profileData.email)
            handleChange(2, profileData.phone)
        }
    }, [profileData])

    // FORM
    const inputs: InputProps[] = [
        { name: 'name', type: 'text', placeholder: 'Nome', required: true },
        { name: 'email', type: 'email', placeholder: 'Email', disabled: true },
        { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
    ]

    const { formValues, formValid, handleChange } = useFormValidation(inputs)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await profilePutData({
            name: String(formValues[0]),
            phone: String(formValues[2]),
        })
    }
    const handleDelete = async () => {
        if (
            confirm(
                'Tem certeza que deseja excluir sua conta? Se sim, lembre-se de apagar os seus leads antes!'
            )
        ) {
            try {
                await profileDeleteData()
                alert('Perfil deletado com sucesso!')
                Cookies.remove('Authorization')
                window.location.href = '/'
            } catch (e) {
                alert(
                    'Não foi possível realizar a operação. Entre em contato com nosso suporte.'
                )
            }
        }
    }

    useEffect(() => {
        if (profileUpdateData !== null) {
            setUpdateMessage({
                msg: 'Perfil atualizado com sucesso!',
                type: 'success',
            })
        } else if (profileUpdateError) {
            setUpdateMessage({
                msg: 'Não foi possível realizar a operação. Entre em contato com nosso suporte.',
                type: 'error',
            })
        }
        clearMessage()
    }, [profileUpdateData, profileUpdateError])

    return (
        <>
            <Header />
            <Container className="mb-2" maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        {!profileError && (
                            <CardComponent
                                className={
                                    profileLoading
                                        ? 'skeleton-loading skeleton-loading-mh-2'
                                        : ''
                                }
                            >
                                {!profileLoading && profileData && (
                                    <>
                                        <StyledH2 className="mb-1">
                                            Seus Dados
                                        </StyledH2>
                                        <FormComponent
                                            inputs={inputs.map(
                                                (input, index) => ({
                                                    ...input,
                                                    type: input.type,
                                                    placeholder:
                                                        input.placeholder,
                                                    value:
                                                        formValues[index] || '',
                                                    onChange: (
                                                        e: ChangeEvent<HTMLInputElement>
                                                    ) =>
                                                        handleChange(
                                                            index,
                                                            (
                                                                e.target as HTMLInputElement
                                                            ).value
                                                        ),
                                                })
                                            )}
                                            buttons={[
                                                {
                                                    className: 'primary',
                                                    disabled:
                                                        !formValid ||
                                                        profileUpdateLoading,
                                                    type: 'submit',
                                                    onClick: handleSubmit,
                                                    children: profileLoading
                                                        ? 'Aguarde..'
                                                        : 'Atualizar meu perfil',
                                                },
                                                {
                                                    className: 'alert',
                                                    disabled:
                                                        profileDeleteLoading,
                                                    type: 'button',
                                                    onClick: handleDelete,
                                                    children:
                                                        profileDeleteLoading
                                                            ? 'Aguarde..'
                                                            : 'Excluir minha conta',
                                                },
                                            ]}
                                            message={updateMessage}
                                        />
                                    </>
                                )}
                            </CardComponent>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardComponent>
                            <StyledH2 className="mb-1">
                                Definições de Conta
                            </StyledH2>
                            <StyledButton
                                className="primary mb-1"
                                onClick={ThemeContext?.toggleTheme}
                            >
                                Trocar para tema{' '}
                                {ThemeContext?.appTheme === 'light'
                                    ? 'escuro'
                                    : 'claro'}
                            </StyledButton>
                            <StyledButton className="alert" onClick={logout}>
                                Logout
                            </StyledButton>
                        </CardComponent>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Profile
