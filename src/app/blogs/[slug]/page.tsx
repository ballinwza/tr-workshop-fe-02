import BlogDetailProvider from '@/sections/providers/BlogDetail.provider'

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    return <div>{slug && <BlogDetailProvider placardId={slug} />}</div>
}
