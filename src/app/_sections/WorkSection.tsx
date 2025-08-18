import { WorkFeature } from '@/app/_components'
import { workData } from '@/app/_data'
import styles from './sections.module.scss'

export default function WorkSection() {
	return (
		<section id="work" className={`${styles.sectionWrapper} section`}>
			<div className={styles.subtitleWraper}>
				<h2 className={styles.subtitle}>Work History</h2>
			</div>
			{workData.map(data => (
				<WorkFeature key={data.companyName} {...data} />
			))}
		</section>
	)
}
