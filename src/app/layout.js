import './globals.css'

export const metadata = {
    title: 'Memory Game',
    description: 'A memory game for River and Finn',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
