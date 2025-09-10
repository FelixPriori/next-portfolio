import { WorkFeature } from '@/app/_components'
import styles from './sections.module.scss'
import { DictionaryType } from '@/dictionaries'

export default function WorkSection({
	workSection,
}: {
	workSection: DictionaryType['workSection']
}) {
	return (
		<section id="work" className={`${styles.sectionWrapper} section`}>
			<div className={styles.subtitleWraper}>
				<h2 className={styles.subtitle}>{workSection.title}</h2>
			</div>
			{workSection.workHistory.map(data => (
				<WorkFeature key={data.companyName} {...data} />
			))}
		</section>
	)
}
