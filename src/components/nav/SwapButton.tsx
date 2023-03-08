import React from "react"

interface SwapButtonProps {
    className?: string;
    title: string;
    ariaLabel: string;
    icon1: React.ReactNode;
    icon2: React.ReactNode;
    mobile?: boolean;
    onClick?: () => void;
    onClickP?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export default function SwapButton({
    className, title, ariaLabel, icon1, icon2,
    mobile, onClick, onClickP }: SwapButtonProps) {
    return (
        <div className={'bg-liSec dark:bg-black w-max py-2 px-2 rounded-[3rem] backdrop-blur-lg ' +
            (mobile ? "lg:invisible pointer-events-auto backdrop-blur-lg " : "") + className}>
            <label
                title={title}
                className="swap swap-rotate 
              text-liBg hover:bg-liPrimary hover:text-liSec dark:hover:bg-primaryAlt dark:text-primaryAlt dark:hover:text-black 
              transition ease-linear duration-300
              bg-transparent p-[0.9rem] rounded-[50%] text-lg">
                <input type="checkbox" aria-label={ariaLabel} onClick={(onClick ? onClick : onClickP)} />
                {icon1}
                {icon2}
            </label>
        </div>
    )
}