import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextToDo',
  description: 'a place for your todos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-[url(../../public/background.svg)] bg-cover h-screen text-slate-100 container mx-auto p-4`}>{children}</body>
    </html>
  )
}
