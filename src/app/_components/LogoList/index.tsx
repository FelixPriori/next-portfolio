import { Logo } from '../Logo'
import { logoList } from './logoList'
import styles from './logoList.module.scss'

export interface LogoItemProps {
	src: string
	alt: string
	name: string
}

export function LogoItem({ src, alt, name }: LogoItemProps) {
	return (
		<li className={styles.logoItem}>
			<Logo alt={alt} src={src} />
			{name}
		</li>
	)
}

export function LogoList() {
	return (
		<ul className={styles.logoList}>
			{logoList.map(logo => (
				<LogoItem
					key={logo.name}
					src={logo.src}
					alt={logo.alt}
					name={logo.name}
				/>
			))}
		</ul>
	)
}
