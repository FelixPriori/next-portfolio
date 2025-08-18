import { Nunito, Rowdies } from 'next/font/google'
import ThemeProvider from '@/app/_providers/ThemeProvider'
import './globals.scss'

const nunito = Nunito({
	variable: '--font-nunito',
	subsets: ['latin'],
})

const rowdies = Rowdies({
	variable: '--font-rowdies',
	weight: ['300', '400', '700'],
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${nunito.variable} ${rowdies.variable}`}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
