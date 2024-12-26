import "./globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "株式会社Levelic - 企業の健康経営をサポート",
  description: "企業の健康経営をサポートし、従業員の健康と生産性の向上に貢献します。パーソナルトレーニングの提供、オフィスジム導入のサポート・運営を行っています。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
