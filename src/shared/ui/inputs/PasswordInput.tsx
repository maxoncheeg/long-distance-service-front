import React, { useState } from "react";

interface IPasswordInputProps {
    id: string;
    placeholder?: string;
    input?: string;
    errorMessage?: string;
    validationPattern?: string;
    onValueChanged?: (value: string) => void;
}

export default function PasswordInput({
    id,
    placeholder = "",
    input = "",
    errorMessage = "",
    validationPattern = "",
    onValueChanged = undefined,
}: IPasswordInputProps) {
    const [isValid, setIsValid] = useState(true);

    const regex: RegExp | null = validationPattern
        ? new RegExp(validationPattern)
        : null;

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (regex !== null && !regex.test(value)) {
            setIsValid(false);
            return;
        }
        setIsValid(true);

        if (onValueChanged !== undefined) onValueChanged(value);
    };

    return (
        <>
            <label htmlFor={id} className="text-left text-lds-light">
                {input}
            </label>

            <input
                id={id}
                type="password"
                onChange={changeValue}
                className={
                    "w-full text-[16px] h-[20px] text-left bg-transparent text-gray-200 border-lds-light  " +
                    "mt-1 pt-[15px] pb-[15px] pl-[5px] border-b-3 outline-0 focus:border-b-3 focus:animate-border-white-pulse " +
                    (!isValid
                        ? "focus:border-lds-accent"
                        : "focus:border-lds-main")
                }
                placeholder={placeholder}
            />

            <div className="w-full min-h-[30px] text-left indent-0 text-[14px] mt-[5px]">
                {!isValid && <p className="text-lds-accent">{errorMessage}</p>}
            </div>
        </>
    );
}
