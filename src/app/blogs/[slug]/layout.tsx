import Layout from '@/sections/components/layout/Layout'

export default function RootLayoutBlogDetail({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <Layout childClassName="bg-white">{children}</Layout>
}
