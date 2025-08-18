import { logoListData } from '@/app/_data'
import LogoItem from './LogoItem'
import styles from './logo.module.scss'

export default function LogoList() {
	return (
		<ul className={styles.logoList}>
			{logoListData.map(logo => (
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
