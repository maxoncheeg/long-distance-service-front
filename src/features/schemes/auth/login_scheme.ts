import * as yup from "yup";

export const LoginScheme = yup
        .object({
            email: yup
                .string()
                .required("Необходимое поле.")
                .email("Введите корректную почту. Например, name@domain.ru."),
            password: yup
                .string()
                .min(3, "Минимум 3 символа.")
                .matches(
                    /(?=.*[a-zа-я])/,
                    "Пароль должен содержать хотя бы одну букву в нижнем регистре."
                )
                .matches(
                    /(?=.*[A-ZА-Я])/,
                    "Пароль должен содержать хотя бы одну букву в верхнем регистре."
                )
                .matches(
                    /(?=.*\d)/,
                    "Пароль должен содержать хотя бы одну цифру."
                )
                .required("Необходимое поле."),
        })
        .required();