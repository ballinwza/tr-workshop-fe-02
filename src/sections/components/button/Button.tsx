import { FC } from 'react'

interface Props {
    children: string
    onClick?: () => void
    theme?: 'light' | 'dark'
    mainColor?: string
    borderColor?: string
    htmlType?: 'submit' | 'reset' | 'button' | undefined
    additionClass?: string
}
const Button: FC<Props> = ({
    children,
    onClick,
    theme = 'dark',
    mainColor = 'var(--success)',
    borderColor = 'var(--success)',
    htmlType = undefined,
    additionClass,
}: Props) => {
    const isDarkTheme = theme === 'dark'
    return (
        <button
            type={htmlType}
            onClick={onClick}
            className={
                'w-full flex rounded-lg justify-center items-center shadow-[0_1px_2px_0_#1018280D min-w-[105px] min-h-10 font-semibold text-sm cursor-pointer ' +
                'md:w-auto ' +
                additionClass
            }
            style={{
                backgroundColor: isDarkTheme ? mainColor : 'white',
                color: isDarkTheme ? 'var(--white)' : mainColor,
                borderWidth: isDarkTheme ? 'none' : '1px',
                borderColor: borderColor,
            }}
        >
            {children}
        </button>
    )
}

export default Button
