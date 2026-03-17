"use client"

import ThemeProvider from "./theme-provider"
import AnalyticsProvider from "./analytics-provider"
import AuthProvider from "./auth-provider"
import ToastProvider from "./toast-provider"

import {getProviders} from "@/lib/config/getProviders"

type Props = {
    children: React.ReactNode
}

export default function Providers({ children }: Props) {

    const config = getProviders()

    let content = children

    if (config.toast) {
        content = <ToastProvider>{content}</ToastProvider>
    }

    if (config.auth) {
        content = <AuthProvider>{content}</AuthProvider>
    }

    if (config.analytics) {
        content = <AnalyticsProvider>{content}</AnalyticsProvider>
    }

    if (config.theme) {
        content = <ThemeProvider>{content}</ThemeProvider>
    }

    return <>{content}</>
}