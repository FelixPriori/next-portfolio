import { Logo } from '@/app/_components'
import styles from './logo.module.scss'

export interface LogoItemProps {
	src: string
	alt: string
	name: string
}

export default function LogoItem({ src, alt, name }: LogoItemProps) {
	return (
		<li className={styles.logoItem}>
			<Logo alt={alt} src={src} />
			{name}
		</li>
	)
}
