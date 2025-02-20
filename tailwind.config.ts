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
                    '500': 'var(--green-500)',
                    '300': 'var(--green-300)',
                    '100': 'var(--green-100)',
                },
                grey: {
                    '100': 'var(--grey-100)',
                    '300': 'var(--grey-300)',
                },
                success: 'var(--success)',
                text: 'var(--text)',
                black: 'var(--black)',
                white: 'var(--white)',
                golden: 'var(--golden)',
            },
        },
    },
    plugins: [],
} satisfies Config
