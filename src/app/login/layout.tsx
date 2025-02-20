import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login',
    description: 'Coding interview as frontend developer',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <div>{children}</div>
}
