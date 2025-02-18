import getConfig from 'next/config'

export const getAuthCookiesName = (): string => {
    const { publicRuntimeConfig } = getConfig()
    const env: string = publicRuntimeConfig.environment
    return env === 'prod' ? 'tokens' : `tokens_${env.toLowerCase()}`
}
