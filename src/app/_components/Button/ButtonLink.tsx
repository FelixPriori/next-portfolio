import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import { ButtonVariant } from '.'
import styles from './button.module.scss'
interface ButtonLinkProps extends LinkProps {
	children: ReactNode
	variant?: ButtonVariant
}

export default function ButtonLink({
	children,
	variant = ButtonVariant.BLUE,
	...props
}: ButtonLinkProps) {
	return (
		<Link className={`${styles.button} ${styles[variant]}`} {...props}>
			{children}
		</Link>
	)
}
