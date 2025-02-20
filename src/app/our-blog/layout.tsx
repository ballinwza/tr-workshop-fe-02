import Layout from '@/sections/components/layout/Layout'

export default function RootLayoutOurBlog({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <Layout childClassName="bg-grey-100">{children}</Layout>
}
