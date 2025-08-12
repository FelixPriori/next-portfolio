import { Metadata } from 'next'
import AboutSection from './_sections/AboutSection'
import ContactSection from './_sections/ContactSection'
import IntroSection from './_sections/IntroSection'
import TechnologiesSection from './_sections/TechnologiesSection'
import TestimonialsSection from './_sections/TestimonialsSection'
import TrainingSection from './_sections/TrainingSection'
import WorkSection from './_sections/WorkSection'
import styles from './layout.module.scss'

export const metadata: Metadata = {
	title: "Felix's Porftolio",
	description: 'Felix Rioux Sabourin - Professional Web Developer',
}

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
