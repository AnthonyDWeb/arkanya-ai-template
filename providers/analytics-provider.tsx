"use client"

type AnalyticsProviderProps = {
    children: React.ReactNode
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
    return <>{children}</>
}