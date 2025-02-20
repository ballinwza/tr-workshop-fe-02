import { FC } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { capitalize } from 'radash'
import Image from 'next/image'
import { DropdownItem } from './Dropdown.style'

interface Props {
    menuList: string[]
    dropdownValue: string
    setDropdownValue: (value: string) => void
    type?: 'plain' | 'light'
}

const Dropdown: FC<Props> = ({
    menuList,
    dropdownValue,
    setDropdownValue,
    type = 'plain',
}: Props) => {
    const isPlain = type === 'plain'

    return (
        <div
            className={
                `relative ` +
                `${
                    isPlain
                        ? 'md:min-w-[320px] z-10'
                        : 'bg-white border border-success rounded-lg'
                }`
            }
        >
            <Menu>
                <div
                    className={
                        isPlain ? `flex  w-full py-2.5 px-3.5 justify-end` : ''
                    }
                >
                    <MenuButton
                        className={
                            !isPlain
                                ? `flex  w-full py-2.5 px-3.5 justify-center`
                                : ''
                        }
                    >
                        <div className="flex justify-end items-center gap-[5px]">
                            <span
                                className={
                                    `font-semibold text-sm ` +
                                    `${isPlain ? 'text-text' : 'text-success'}`
                                }
                            >
                                {capitalize(dropdownValue)}
                            </span>
                            <div>
                                <Image
                                    src={`${isPlain ? '/icons/arrow-down-icon.svg' : '/icons/arrow-down-success-icon.svg'}`}
                                    alt="arrow down icon"
                                    width={10}
                                    height={5}
                                />
                            </div>
                        </div>
                    </MenuButton>
                    <MenuItems>
                        <div className="shadow-lg border bg-white border-[#DADADA] rounded-lg w-full overflow-hidden absolute top-[50px] right-0">
                            {menuList.map((menu, index) => {
                                return (
                                    <MenuItem key={index}>
                                        <DropdownItem
                                            $active={dropdownValue === menu}
                                            onClick={(e) =>
                                                setDropdownValue(
                                                    e.currentTarget.textContent?.toLowerCase() ??
                                                        dropdownValue,
                                                )
                                            }
                                            className="data-[focus]:bg-green-100 text-start px-3.5 py-2.5 cursor-pointer flex items-center justify-between"
                                        >
                                            <div className="text-[#1C1C1C] font-medium text-base">
                                                {capitalize(menu)}
                                            </div>
                                            {dropdownValue === menu && (
                                                <div>
                                                    <Image
                                                        alt="tick icon"
                                                        src="/icons/tick-icon.svg"
                                                        width={13}
                                                        height={9}
                                                    />
                                                </div>
                                            )}
                                        </DropdownItem>
                                    </MenuItem>
                                )
                            })}
                        </div>
                    </MenuItems>
                </div>
            </Menu>
        </div>
    )
}

export default Dropdown
