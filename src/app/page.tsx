import { Metadata } from 'next'
import { SectionDisplayer } from '@/app/_components'
import {
	IntroSection,
	AboutSection,
	TechnologiesSection,
	WorkSection,
	TrainingSection,
	TestimonialsSection,
	ContactSection,
	LegalSection,
} from './_sections'
import styles from './layout.module.scss'

export const metadata: Metadata = {
	title: "Felix's Porftolio",
	description: 'Felix Rioux Sabourin - Professional Web Developer',
}

export default function Home() {
	return (
		<div>
			<main className={styles.main}>
				<SectionDisplayer />
				<IntroSection />
				<AboutSection />
				<TechnologiesSection />
				<WorkSection />
				<TrainingSection />
				<TestimonialsSection />
			</main>
			<footer>
				<ContactSection />
				<LegalSection />
			</footer>
		</div>
	)
}
