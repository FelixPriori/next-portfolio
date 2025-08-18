'use client'
import useSectionTracker from '@/app/_hooks/useSectionTracker'
import styles from './sectionDisplayer.module.scss'
export default function SectionDisplayer() {
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
					About
				</a>
				<a
					className={`${
						currentSection === 'technologies' ? styles.current : ''
					}`}
					href="#technologies"
				>
					Technologies
				</a>
				<a
					className={`${currentSection === 'work' ? styles.current : ''}`}
					href="#work"
				>
					Work History
				</a>
				<a
					className={`${currentSection === 'training' ? styles.current : ''}`}
					href="#training"
				>
					Training
				</a>
				<a
					className={`${
						currentSection === 'testimonials' ? styles.current : ''
					}`}
					href="#testimonials"
				>
					Testimonials
				</a>
				<a
					className={`${currentSection === 'contact' ? styles.current : ''}`}
					href="#contact"
				>
					Contact
				</a>
			</nav>
		</div>
	)
}
