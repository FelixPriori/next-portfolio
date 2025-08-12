import styles from './sections.module.scss'
import Image from 'next/image'
import {
	ButtonExternalLink,
	ButtonLink,
	ButtonVariant,
	Socials,
} from '../_components'

export default function IntroSection() {
	return (
		<section className={styles.headerSection}>
			<div className={styles.heroWrapper}>
				<div className={styles.textWrapper}>
					<div className={styles.textInnerWrapper}>
						<h1 className={styles.title}>Félix Rioux Sabourin</h1>
						<h2 className={styles.subtitle}>Professional Web Developer</h2>
					</div>
				</div>
				<div className={styles.avatarWrapper}>
					<div className={styles.avatar}>
						<Image
							className={styles.avatarImage}
							width={341}
							height={341}
							alt="Félix's avatar"
							src="/avatar.jpg"
						/>
					</div>
					<Socials />
					<div className={styles.buttonContainer}>
						<ButtonLink href="#contact">Contact</ButtonLink>
						<ButtonExternalLink
							href="https://drive.google.com/file/d/1qgunvpS6rqU_98DTGBvWTcCzCIMHL6sC/view?usp=drive_link"
							target="_blank"
							rel="noreferrer"
							variant={ButtonVariant.YELLOW}
						>
							Resume
						</ButtonExternalLink>
					</div>
				</div>
			</div>
		</section>
	)
}
