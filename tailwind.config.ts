import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                green: {
                    '500': '#243831',
                    '300': '#2B5F44',
                    '100': '#D8E9E4',
                },
                grey: {
                    '100': '#BBC2C0',
                    '300': '#939494',
                },
                success: '#49A569',
                text: '#191919',
                black: '#000000',
                white: '#FFFFFF',
                golden: '#C5A365',
            },
        },
    },
    plugins: [],
} satisfies Config
