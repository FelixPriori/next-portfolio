import { Nunito, Rowdies } from 'next/font/google'
import ThemeProvider from '@/app/_providers/ThemeProvider'
import '@/app/globals.scss'

const nunito = Nunito({
	variable: '--font-nunito',
	subsets: ['latin'],
})

const rowdies = Rowdies({
	variable: '--font-rowdies',
	weight: ['300', '400', '700'],
	subsets: ['latin'],
})

export default async function RootLayout({
	params,
	children,
}: LayoutProps<'/[lang]'>) {
	const { lang } = await params
	return (
		<html lang={lang} suppressHydrationWarning>
			<body className={`${nunito.variable} ${rowdies.variable}`}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
