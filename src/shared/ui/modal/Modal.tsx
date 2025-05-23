import React from "react"

interface ModelProps {
    children: React.ReactNode
    title: string,
    onClose: () => void
}

export function Modal({ children, title, onClose }: ModelProps) {
    return (
        <>
            <div
                className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
                onClick={onClose}
            />
            <div
                className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
                <h1>{title}</h1>
                {children}
            </div>
        </>
    )
}