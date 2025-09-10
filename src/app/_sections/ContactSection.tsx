import { Paragraph } from '@/app/_components'
import ContactForm from '@/app/_forms/ContactForm'
import styles from './sections.module.scss'
import layoutStyles from '../layout.module.scss'
import { DictionaryType } from '@/dictionaries'

export default function ContactSection({
	contactSection,
}: {
	contactSection: DictionaryType['contactSection']
}) {
	return (
		<div id="contact" className={`${styles.contactWrapper} section`}>
			<div className={layoutStyles.main}>
				<div className={styles.subtitleWraper}>
					<h2 className={`${styles.subtitle} ${styles.contact}`}>
						{contactSection.title}
					</h2>
				</div>
				<Paragraph>{contactSection.subtitle}</Paragraph>
				<div className={styles.contactFormWrapper}>
					<ContactForm contactForm={contactSection.contactForm} />
				</div>
			</div>
		</div>
	)
}
