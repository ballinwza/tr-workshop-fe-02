export default function RootLayoutBlogDetail({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div
            className={
                'bg-white min-h-screen px-4 pt-6 pb-4 ' +
                'md:pl-[144px] md:pr-[216px] md:py-[33px]'
            }
        >
            {children}
        </div>
    )
}
