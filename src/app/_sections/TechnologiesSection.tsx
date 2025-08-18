import { LogoList } from '@/app/_components'
import styles from './sections.module.scss'

export default function TechnologiesSection() {
	return (
		<section id="technologies" className={`${styles.sectionWrapper} section`}>
			<div className={styles.subtitleWraper}>
				<h2 className={styles.subtitle}>Technologies</h2>
			</div>
			<LogoList />
		</section>
	)
}
