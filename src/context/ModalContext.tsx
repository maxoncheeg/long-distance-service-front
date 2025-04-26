import { createContext, useState } from "react";

interface IModalContext {
    modal: boolean,
    open: () => void,
    close: () => void
}

export const ModalContext = createContext<IModalContext>({
    modal: false,
    open: function (): void {
        throw new Error("Function not implemented.");
    },
    close: function (): void {
        throw new Error("Function not implemented.");
    }
})

export const ModalState = ({ children }: { children: React.ReactNode }) => {
    const [modal, setModal] = useState(false)

    const open = () => setModal(true)
    const close = () => setModal(false)


    return (
        <ModalContext.Provider value={{ modal, open, close }}>{children}</ModalContext.Provider>
    )
}