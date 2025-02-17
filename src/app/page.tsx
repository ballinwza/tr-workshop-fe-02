import Card from '@/sections/components/card/Card'

export default function HomePage() {
    return (
        <div
            className={
                `px-4 py-[47px] ` + `md:max-w-[798px] md:mx-10 md:my-[34px] `
            }
        >
            <div className="flex flex-col gap-[0.5px] overflow-hidden rounded-xl w-full  bg-grey-100">
                <Card />
                <Card />
            </div>
        </div>
    )
}
