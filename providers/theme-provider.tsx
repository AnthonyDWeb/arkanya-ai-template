"use client"

type ThemeProviderProps = {
    children: React.ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    return <>{children}</>
}