"use client"

import ThemeProvider from "./theme-provider"
import AnalyticsProvider from "./analytics-provider"
import AuthProvider from "./auth-provider"
import ToastProvider from "./toast-provider"

type ProvidersProps = {
    children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <ThemeProvider>
            <AnalyticsProvider>
                <AuthProvider>
                    <ToastProvider>
                        {children}
                    </ToastProvider>
                </AuthProvider>
            </AnalyticsProvider>
        </ThemeProvider>
    )
}