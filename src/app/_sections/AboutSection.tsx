import styles from './sections.module.scss'
import { DictionaryType } from '@/dictionaries'
import { MarkedParagraph } from '../_components/Paragraph'

export default function AboutSection({
	aboutSection,
}: {
	aboutSection: DictionaryType['aboutSection']
}) {
	return (
		<section id="about" className={`${styles.sectionWrapper} section`}>
			<div className={styles.subtitleWraper}>
				<h2 className={styles.subtitle}>{aboutSection.title}</h2>
			</div>
			{aboutSection.paragraphs.map(paragraph => (
				<MarkedParagraph key={paragraph} paragraph={paragraph} />
			))}
		</section>
	)
}
