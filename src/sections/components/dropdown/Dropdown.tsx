import { FC } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { capitalize } from 'radash'
import Image from 'next/image'
import { DropdownItem } from './Dropdown.style'

interface Props {
    menuList: string[]
    dropdownValue: string
    setDropdownValue: (value: string) => void
}

const Dropdown: FC<Props> = ({
    menuList,
    dropdownValue,
    setDropdownValue,
}: Props) => {
    return (
        <div className="px-3.5 min-w-[320px] relative z-10">
            <Menu>
                <div className="text-end">
                    <MenuButton>
                        <div className="flex justify-end items-center gap-[5px]">
                            <span className="text-text font-semibold text-sm">
                                {capitalize(dropdownValue)}
                            </span>
                            <div>
                                <Image
                                    src="/icons/arrow-down-icon.svg"
                                    alt="arrow down icon"
                                    width={10}
                                    height={5}
                                />
                            </div>
                        </div>
                    </MenuButton>
                    <MenuItems>
                        <div className="rounded-lg w-full overflow-hidden absolute top-[45px] right-0">
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
