import TrainingFeature from '../_components/TrainingFeature/TrainingFeature'
import styles from './sections.module.scss'
import { trainingData } from './trainingData'

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
