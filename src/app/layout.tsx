import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import ReduxProvider from "./ReduxProvider"
import AuthContextProvider from "./AuthContextProvider"
import "./globals.css"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
    title: "Furniture Shop",
    description: "Convenience At Your Finger Tip ",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ReduxProvider>
                    <AuthContextProvider>{children}</AuthContextProvider>
                </ReduxProvider>
            </body>
        </html>
    )
}
