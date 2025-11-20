import { Metadata } from 'next'
import { SectionDisplayer } from '@/app/_components'
import styles from '@/app/layout.module.scss'
import { Locales } from '@/i18n'
import { getDictionary } from '@/dictionaries'
import {
	IntroSection,
	AboutSection,
	TechnologiesSection,
	WorkSection,
	TrainingSection,
	TestimonialsSection,
	ContactSection,
	LegalSection,
	ProjectsSection,
} from '@/app/_sections'

type Props = {
	params: Promise<{ lang: Locales }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
	const { lang } = await props.params
	const { metadata } = await getDictionary(lang)
	return metadata
}

export default async function Home({ params }: Props) {
	const { lang } = await params
	const {
		navigation,
		introSection,
		theme,
		aboutSection,
		technologiesSection,
		projectsSection,
		workSection,
		trainingSection,
		testimonialsSection,
		contactSection,
		legalSection,
	} = await getDictionary(lang)
	return (
		<div>
			<main className={styles.main}>
				<SectionDisplayer navigation={navigation} />
				<IntroSection introSection={introSection} theme={theme} />
				<AboutSection aboutSection={aboutSection} />
				<TechnologiesSection technologiesSection={technologiesSection} />
				<WorkSection workSection={workSection} />
				<ProjectsSection projectsSection={projectsSection} />
				<TrainingSection trainingSection={trainingSection} />
				<TestimonialsSection testimonialsSection={testimonialsSection} />
			</main>
			<footer>
				<ContactSection contactSection={contactSection} />
				<LegalSection legalSection={legalSection} />
			</footer>
		</div>
	)
}
