import { Mark, Paragraph } from '../_components'
import styles from './sections.module.scss'
export default function AboutSection() {
	return (
		<section id="about" className={styles.sectionWrapper}>
			<div className={styles.subtitleWraper}>
				<h2 className={styles.subtitle}>About Me</h2>
			</div>
			<Paragraph>
				With over <Mark>four years of experience</Mark> in front-end
				development, I am a dynamic professional and an arts-oriented individual
				captivated by the transformative power of programming to bring ideas to
				life. I have contributed to <Mark>over a dozen client projects</Mark>{' '}
				across a <Mark>wide range of industries</Mark>, and I always have a
				passion project ongoing.
			</Paragraph>
			<Paragraph>
				I am passionate about coding and always seek new ways to improve my
				craft. I love to work in <Mark>tight-knit teams</Mark> and find extreme
				satisfaction in{' '}
				<Mark>finding a great solution to a challenging problem</Mark>.
			</Paragraph>
		</section>
	)
}
