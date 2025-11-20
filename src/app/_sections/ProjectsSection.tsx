import { DictionaryType } from '@/dictionaries'
import { ProjectFeature } from '../_components'
import styles from './sections.module.scss'

export default function ProjectsSection({
	projectsSection,
}: {
	projectsSection: DictionaryType['projectsSection']
}) {
	return (
		<section id="projects" className={`${styles.sectionWrapper} section`}>
			<div className={styles.subtitleWraper}>
				<h2 className={styles.subtitle}>{projectsSection.title}</h2>
				{projectsSection.projects.map(project => (
					<ProjectFeature key={project.title} {...project} />
				))}
			</div>
		</section>
	)
}
