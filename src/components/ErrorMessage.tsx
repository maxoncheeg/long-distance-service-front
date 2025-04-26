
interface ErrorMessageProps{
    error: string
}

export function ErrorMessage({error} : ErrorMessageProps) {
    return (
        <h4>ПРОИЗОШЛА ОШИБКА: {error}</h4>
    )
}