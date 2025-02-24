import axios from 'axios'
import Cookies from 'js-cookie'
export const axiosWithXApiKey = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_DEV}`,
    withCredentials: true,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_DEV}`,
        'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
    },
})

export const axiosWithAuth = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_DEV}`,
    withCredentials: true,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_DEV}`,
        'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
        Authorization: `Bearer ${Cookies.get('access_token')}`,
    },
})
