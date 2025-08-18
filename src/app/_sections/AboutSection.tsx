import { Mark, Paragraph } from '@/app/_components'
import styles from './sections.module.scss'

export default function AboutSection() {
	return (
		<section id="about" className={`${styles.sectionWrapper} section`}>
			<div className={styles.subtitleWraper}>
				<h2 className={styles.subtitle}>About Me</h2>
			</div>
			<Paragraph>
				With over <Mark>five years of experience</Mark> in front-end
				development, I am a dynamic professional and an arts-oriented individual
				captivated by the transformative power of programming to bring ideas to
				life. The first four years of my career were spent working for agencies,
				and I have contributed to <Mark>over a dozen client projects</Mark>{' '}
				across a <Mark>wide range of industries</Mark>.
			</Paragraph>
			<Paragraph>
				Since November of 2024, I have been working full time to build an{' '}
				<Mark>in-house SAAS</Mark> as a{' '}
				<Mark>consultant web development engineer</Mark>, using my expertise to
				create a one of a kind service in the field of supply chains.
			</Paragraph>
			<Paragraph>
				I thrive most while working in <Mark>tight-knit teams</Mark> and I my
				biggest satisfaction is to{' '}
				<Mark>find a great solution to a challenging problem</Mark>. Being in a
				state of flow while coding is what I love most about being a dev.
			</Paragraph>
		</section>
	)
}
