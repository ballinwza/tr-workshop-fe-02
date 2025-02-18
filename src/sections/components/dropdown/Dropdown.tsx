import { FC, Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { capitalize } from 'radash'
import Image from 'next/image'

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
        <div className="py-2.5 px-3.5 min-w-[320px] relative z-10">
            <Menu as={Fragment}>
                <div className="text-end">
                    <MenuButton>
                        <div className="flex justify-end items-center gap-[5px]">
                            <span>{capitalize(dropdownValue)}</span>
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
                        <div className="bg-white rounded-lg py-1 w-full overflow-hidden absolute top-[45px] right-0">
                            {menuList.map((menu, index) => {
                                return (
                                    <MenuItem key={index}>
                                        <div
                                            onClick={(e) =>
                                                setDropdownValue(
                                                    e.currentTarget.textContent?.toLowerCase() ??
                                                        dropdownValue,
                                                )
                                            }
                                            className="data-[focus]:bg-green-100 text-start px-3.5 py-2.5 cursor-pointer"
                                        >
                                            {capitalize(menu)}
                                        </div>
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
