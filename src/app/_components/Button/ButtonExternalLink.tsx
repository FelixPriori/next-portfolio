import { HTMLProps, ReactNode } from 'react'
import { ButtonVariant } from '.'
import styles from './button.module.scss'

interface ButtonExternalLinkProps extends HTMLProps<HTMLAnchorElement> {
	children: ReactNode
	variant?: ButtonVariant
}
export default function ButtonExternalLink({
	children,
	variant = ButtonVariant.BLUE,
	...props
}: ButtonExternalLinkProps) {
	return (
		<a className={`${styles.button} ${styles[variant]}`} {...props}>
			{children}
		</a>
	)
}
