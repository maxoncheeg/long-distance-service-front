interface IErrorMessageProps {
    error: string;
}

export default function ErrorMessage({ error }: IErrorMessageProps) {
    return <div>ОШИБКА: {error}</div>;
}
