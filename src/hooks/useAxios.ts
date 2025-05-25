import { useState } from 'react'
import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/`,
})

export const usePost = <T, P>(endpoint: string) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<number | null>(null)

    const postData = async (postData: P, config?: AxiosRequestConfig) => {
        setData(null)
        setLoading(true)
        setError(null)

        try {
            const response = await axiosInstance({
                url: endpoint,
                method: 'POST',
                data: postData,
                headers: {
                    'Content-Type': 'application/json',
                    ...config?.headers,
                },
                ...config,
            })
            setData(response.data)
        } catch (e: any) {
            if (e.response && e.response.status) {
                setError(e.response.status)
            } else {
                setError(500)
            }
        } finally {
            setLoading(false)
        }
    }

    return { data, loading, error, postData }
}
