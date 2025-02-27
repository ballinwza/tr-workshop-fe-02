import axios from 'axios'

export const axiosWithXApiKey = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_PROD}`,
    withCredentials: true,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_PROD}`,
        'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
    },
})

// export const axiosWithAuth = axios.create({
//     baseURL: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_PROD}`,
//     withCredentials: true,
//     timeout: 5000,
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Credentials': true,
//         'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_PROD}`,
//         'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
//         // Authorization: `Bearer ${Cookies.get('access_token')}`,
//     },
// })
