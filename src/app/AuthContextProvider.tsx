"use client"
import React from "react"
import { AuthProvider } from "@/context/authContext"

export default function AuthContextProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return <AuthProvider>{children}</AuthProvider>
}
