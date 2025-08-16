import { ReactNode } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export default function ThemeProvider({ children }: { children: ReactNode }) {
	return (
		<NextThemeProvider
			attribute="class"
			defaultTheme="light"
			themes={['light', 'dark']}
			storageKey="theme"
		>
			{children}
		</NextThemeProvider>
	)
}
