"use client"

type ToastProviderProps = {
    children: React.ReactNode
}

export default function ToastProvider({ children }: ToastProviderProps) {
    return <>{children}</>
}