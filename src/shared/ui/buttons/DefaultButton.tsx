interface IAuthButtonProps {
    type: "submit" | "reset" | "button" | undefined;
    disabled: boolean;
    text: string;
    disabledText: string;
}

export default function AuthButton({
    text,
    disabledText,
    type,
    disabled,
    ...props
}: IAuthButtonProps) {
    return (
        <>
            <button
                type={type}
                disabled={disabled}
                className="text-white h-full w-full content-center block bg-lds-main hover:border-b-[5px]
             hover:border-lds-accent border-lds-main  hover:text-white
            hover:active:border-white hover:active:text-white hover:active:bg-lds-accent
            transition-all duration-200"
                {...props}
            >
                {!disabled ? text : disabledText}
            </button>
        </>
    );
}
