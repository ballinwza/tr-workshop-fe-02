import axios from 'axios'

export const axiosWithRules = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_PROD}`,
    withCredentials: true,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_PROD}`,
    },
})
