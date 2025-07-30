interface IAuthInputProps {
    id: string;
    type: string;
    placeholder?: string;
    label?: string;
    error?: string;
}

export function AuthInput({
    id,
    placeholder = "",
    type = "text",
    label = "",
    error = "",
    ...props
}: IAuthInputProps) {
    return (
        <>
            <label
                htmlFor={id}
                className="text-left text-lds-light text-[16px]"
            >
                {label}
            </label>

            <input
                id={id}
                type={type}
                className={
                    "w-full text-[16px] h-[20px] text-left bg-transparent text-gray-200 border-lds-light  " +
                    "mt-1 pt-[15px] pb-[15px] pl-[5px] border-b-3 outline-0 focus:border-b-3 focus:animate-border-white-pulse " +
                    (error
                        ? "focus:border-lds-accent"
                        : "focus:border-lds-main")
                }
                placeholder={placeholder}
                {...props}
            />

            <div className="w-full min-h-[30px] text-left indent-0 text-[14px] mt-[5px]">
                {error && <p className="text-lds-accent">{error}</p>}
            </div>
        </>
    );
}
