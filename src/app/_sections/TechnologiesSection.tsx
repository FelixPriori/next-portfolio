import { LogoList } from '@/app/_components'
import styles from './sections.module.scss'
import { DictionaryType } from '@/dictionaries'

export default function TechnologiesSection({
	technologiesSection,
}: {
	technologiesSection: DictionaryType['technologiesSection']
}) {
	return (
		<section id="technologies" className={`${styles.sectionWrapper} section`}>
			<div className={styles.subtitleWraper}>
				<h2 className={styles.subtitle}>{technologiesSection.title}</h2>
			</div>
			<LogoList />
		</section>
	)
}
