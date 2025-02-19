import { Input } from '@headlessui/react'
import Image from 'next/image'
import { FC } from 'react'
interface Props {
    text: string
    setTextValue: (text: string) => void
}
const InputSearch: FC<Props> = ({ text, setTextValue }: Props) => {
    return (
        <div className="relative">
            <Input
                className="text-[rgba(91,91,91,1)] text-base py-2 px-[42px] rounded-lg border border-green-100 bg-transparent"
                type="text"
                placeholder="Search"
                value={text}
                onChange={(e) => setTextValue(e.currentTarget.value)}
            />
            <Image
                className="absolute top-2.5 left-3.5"
                src="/icons/search-icon.svg"
                alt="search icon"
                width={20}
                height={20}
            />
        </div>
    )
}

export default InputSearch
