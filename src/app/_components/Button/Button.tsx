import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './button.module.scss'
import { ButtonVariant } from '.'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: ButtonVariant
}

export default function Button({
	children,
	variant = ButtonVariant.BLUE,
	...props
}: ButtonProps) {
	return (
		<button className={`${styles.button} ${styles[variant]}`} {...props}>
			{children}
		</button>
	)
}
