import LogoItem, { LogoItemProps } from './LogoItem'
import styles from './logo.module.scss'
import { DictionaryType } from '@/dictionaries'

export default function LogoList({
	logoList,
}: {
	logoList: DictionaryType['technologiesSection']['logoList'] | LogoItemProps[]
}) {
	return (
		<ul className={styles.logoList}>
			{logoList.map(logo => (
				<LogoItem key={logo.name} {...logo} />
			))}
		</ul>
	)
}
