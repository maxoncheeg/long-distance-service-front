import { LoginScheme } from "../../schemes/auth/login_scheme";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginRequest } from "../../../shared/api/models/requests/auth";
import { AuthInput } from "../../../shared/ui/inputs/AuthInput";
import AuthButton from "../../../shared/ui/buttons/DefaultButton";
import { useContext, useState } from "react";
import { UserContext } from "../../../shared/contexts/user_context";

interface ILoginFormProps {
    onLogin: () => void;
}

export function LoginForm({ onLogin }: ILoginFormProps) {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [responseError, setResponseError] = useState<string | undefined>(
        undefined
    );
    const userContext = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginRequest>({
        resolver: yupResolver(LoginScheme),
        defaultValues: { email: "", password: "" },
        mode: "all",
    });

    const onSubmit = async (data: ILoginRequest) => {
        setIsSubmitting(true);
        setResponseError(undefined);

        const result = await userContext.login(data.email, data.password);

        setIsSubmitting(false);

        if (result.success) {
            console.log("Hello, " + result.user?.email);
            console.log(result.user);
            onLogin();
        } else setResponseError("Не удалось выполнить вход. Попробуйте позже.");
    };

    return (
        <form
            className="opacity-100 flex flex-col h-full justify-center py-2.5 px-5"
            onSubmit={handleSubmit(onSubmit)}
        >
            <AuthInput
                id="email"
                type="email"
                label="Почта"
                placeholder="name@domain.ru"
                error={errors.email?.message}
                {...register("email")}
            />

            <AuthInput
                id="password"
                type="password"
                label="Пароль"
                placeholder="******"
                error={errors.password?.message}
                {...register("password")}
            />

            <div className="h-[40px] w-full">
                <AuthButton
                    text="ВХОД"
                    disabledText="ВХОДИМ..."
                    disabled={isSubmitting}
                    type="submit"
                />
            </div>

            <div className="w-full min-h-[30px] indent-0 text-[14px] mt-[5px] text-center">
                {responseError && (
                    <p className="text-lds-accent">{responseError}</p>
                )}
            </div>
        </form>
    );
}
