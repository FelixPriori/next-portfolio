import LogoItem from './LogoItem'
import styles from './logo.module.scss'
import { DictionaryType } from '@/dictionaries'

export default function LogoList({
	logoList,
}: {
	logoList: DictionaryType['technologiesSection']['logoList']
}) {
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
