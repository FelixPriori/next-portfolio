import AboutSection from './_sections/AboutSection'
import ContactSection from './_sections/ContactSection'
import IntroSection from './_sections/IntroSection'
import TechnologiesSection from './_sections/TechnologiesSection'
import TestimonialsSection from './_sections/TestimonialsSection'
import TrainingSection from './_sections/TrainingSection'
import WorkSection from './_sections/WorkSection'
import styles from './layout.module.scss'

export default function Home() {
	return (
		<div>
			<main className={styles.main}>
				<IntroSection />
				<AboutSection />
				<TechnologiesSection />
				<WorkSection />
				<TrainingSection />
				<TestimonialsSection />
			</main>
			<ContactSection />
		</div>
	)
}
