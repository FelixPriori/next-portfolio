'use client'
import useSectionTracker from '@/app/_hooks/useSectionTracker'
import styles from './sectionDisplayer.module.scss'
import { DictionaryType } from '@/dictionaries'

export default function SectionDisplayer({
	navigation,
}: {
	navigation: DictionaryType['navigation']
}) {
	const currentSection = useSectionTracker()
	return (
		<div className={styles.sectionDisplayerWrapper}>
			<nav className={styles.sectionDisplayer}>
				<a
					className={`${
						currentSection === 'intro' || currentSection === 'about'
							? styles.current
							: ''
					}`}
					href="#intro"
				>
					{navigation.about}
				</a>
				<a
					className={`${
						currentSection === 'technologies' ? styles.current : ''
					}`}
					href="#technologies"
				>
					{navigation.technologies}
				</a>
				<a
					className={`${currentSection === 'work' ? styles.current : ''}`}
					href="#work"
				>
					{navigation.work}
				</a>
				<a
					className={`${currentSection === 'training' ? styles.current : ''}`}
					href="#training"
				>
					{navigation.training}
				</a>
				<a
					className={`${
						currentSection === 'testimonials' ? styles.current : ''
					}`}
					href="#testimonials"
				>
					{navigation.testimonials}
				</a>
				<a
					className={`${currentSection === 'contact' ? styles.current : ''}`}
					href="#contact"
				>
					{navigation.contact}
				</a>
			</nav>
		</div>
	)
}
