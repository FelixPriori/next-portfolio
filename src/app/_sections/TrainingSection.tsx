import { TrainingFeature } from '@/app/_components'
import { trainingData } from '@/app/_data'
import styles from './sections.module.scss'

export default function TrainingSection() {
	return (
		<section id="training" className={`${styles.sectionWrapper} section`}>
			<div className={styles.subtitleWraper}>
				<h2 className={styles.subtitle}>Training</h2>
			</div>
			{trainingData.map(training => (
				<TrainingFeature key={training.companyName} {...training} />
			))}
		</section>
	)
}
