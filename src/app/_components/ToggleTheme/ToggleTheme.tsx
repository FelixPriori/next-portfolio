'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { AiFillSun, AiFillMoon } from 'react-icons/ai'
import styles from './toggleTheme.module.scss'

export default function ToggleTheme() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme) {
			setTheme(savedTheme)
		}
	}, [setTheme])

	if (!mounted)
		return (
			<div className={styles.toggleThemeWrapper}>
				<div className={styles.unmounted}>
					<div className={styles.innerUnmounted}></div>
				</div>
			</div>
		)

	return (
		<div className={styles.toggleThemeWrapper}>
			<fieldset className={styles.fieldset}>
				<legend className={styles.visuallyHidden}>Choose theme</legend>
				<div className={styles.innerContainer}>
					<label
						tabIndex={0}
						onKeyDown={e => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault()
								setTheme('light')
							}
						}}
						className={`${styles.labelWrapper} ${
							theme === 'light' ? styles.checked : ''
						}`}
					>
						<input
							tabIndex={-1}
							className={styles.radioInput}
							onChange={() => setTheme('light')}
							checked={theme === 'light'}
							aria-checked={theme === 'light'}
							type="radio"
							id="light"
							name="theme"
							value="light"
						/>
						<span className={styles.visuallyHidden}>Light Theme</span>
						<div className={styles.svgContainer}>
							<AiFillSun />
						</div>
					</label>
					<label
						tabIndex={0}
						onKeyDown={e => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault()
								setTheme('dark')
							}
						}}
						className={`${styles.labelWrapper} ${
							theme === 'dark' ? styles.checked : ''
						}`}
					>
						<input
							tabIndex={-1}
							className={styles.radioInput}
							onChange={() => setTheme('dark')}
							checked={theme === 'dark'}
							aria-checked={theme === 'dark'}
							type="radio"
							id="dark"
							name="theme"
							value="dark"
						/>
						<span className={styles.visuallyHidden}>Dark Theme</span>
						<div className={styles.svgContainer}>
							<AiFillMoon />
						</div>
					</label>
				</div>
			</fieldset>
		</div>
	)
}
