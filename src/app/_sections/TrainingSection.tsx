import { TrainingFeature } from '@/app/_components'
import styles from './sections.module.scss'
import { DictionaryType } from '@/dictionaries'

export default function TrainingSection({
	trainingSection,
}: {
	trainingSection: DictionaryType['trainingSection']
}) {
	return (
		<section id="training" className={`${styles.sectionWrapper} section`}>
			<div className={styles.subtitleWraper}>
				<h2 className={styles.subtitle}>{trainingSection.title}</h2>
			</div>
			{trainingSection.trainingHistory.map(training => (
				<TrainingFeature key={training.companyName} {...training} />
			))}
		</section>
	)
}
