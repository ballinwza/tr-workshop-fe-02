import { FC } from 'react'
import Tag from '../tag/Tag'
import Image from 'next/image'

const Card: FC = () => {
    return (
        <div className="relative bg-white overflow-hidden px-5 py-[21px]">
            <div className="absolute top-[14px] right-[15px]">
                <Image
                    src="/icons/star-icon.svg"
                    alt="star icon"
                    width={16}
                    height={16}
                />
            </div>

            <div className="flex gap-[10px] items-center mb-[15px]">
                <div className="aspect-square w-[31px] rounded-full overflow-hidden">
                    <Image
                        src="/icons/star-icon.svg"
                        alt="star icon"
                        width={31}
                        height={31}
                    />
                </div>
                <div className="text-grey-300 font-medium text-sm">name</div>
            </div>

            <div className="mb-[5px]">
                <Tag>History</Tag>
            </div>

            <div className="mb-[10px]">
                <div className="font-semibold text-base">
                    <strong>The Beginning of the End of the World</strong>
                </div>
                <div className="">
                    <p className="line-clamp-2 text-xs leading-[14px] text-[#101828]">
                        The afterlife sitcom The Good Place comes to its
                        culmination, the show’s two protagonists, Eleanor and
                        Chidi, contemplate their future. Having lived thousands
                        upon thousands of lifetimes together, and having
                        experienced virtually everything this life has to offer,
                        they are weary. It is time for it all to end. The show’s
                        solution to this perpetual happiness-cum-weariness is
                        extinction. When you have had enough, when you are
                        utterly sated by love and joy and pleasure, you can walk
                        through a passage to nothingness. And Chidi has had
                        enough.
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-[5px]">
                <div>
                    <Image
                        src="/icons/message-icon.svg"
                        alt="message icon"
                        width={12}
                        height={12}
                    />
                </div>
                <div className="text-grey-300 font-normal text-xs leading-[14.25px]">
                    32 Comments
                </div>
            </div>
        </div>
    )
}

export default Card
