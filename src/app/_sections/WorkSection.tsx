import WorkFeature from '../_components/WorkFeature/WorkFeature'
import { workData } from './workData'
import styles from './sections.module.scss'
export default function WorkSection() {
	return (
		<section id="work-history" className={styles.sectionWrapper}>
			<div className={styles.subtitleWraper}>
				<h2 className={styles.subtitle}>Work History</h2>
			</div>
			{workData.map(data => (
				<WorkFeature key={data.companyName} {...data} />
			))}
		</section>
	)
}
