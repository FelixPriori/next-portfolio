import styles from './sections.module.scss'
import layoutStyles from '../layout.module.scss'
import { Paragraph, Credits, SourceCode } from '../_components'
import ContactForm from '../_forms/ContactForm'

export default function ContactSection() {
	return (
		<footer id="contact" className={styles.contactWrapper}>
			<div className={layoutStyles.main}>
				<div className={styles.subtitleWraper}>
					<h2 className={`${styles.subtitle} ${styles.contact}`}>Contact</h2>
				</div>
				<Paragraph>Please don&apos;t hesitate to reach out to me!</Paragraph>
				<div className={styles.contactFormWrapper}>
					<ContactForm />
				</div>
				<p>&#169; Felix Rioux Sabourin 2025</p>
				<SourceCode />
				<Credits />
			</div>
		</footer>
	)
}
