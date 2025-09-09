import Image from 'next/image'
import {
	ButtonExternalLink,
	ButtonLink,
	ButtonVariant,
	Socials,
	ToggleTheme,
} from '@/app/_components'
import styles from './sections.module.scss'

export default function IntroSection() {
	return (
		<section className={`${styles.headerSection} section`} id="intro">
			<ToggleTheme />
			<div className={styles.heroWrapper}>
				<div className={styles.textWrapper}>
					<div className={styles.textInnerWrapper}>
						<h1 className={styles.title}>Félix Rioux Sabourin</h1>
						<h2 className={styles.introSubtitle}>Professional Web Developer</h2>
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
							href="https://docs.google.com/document/d/1Y1xdSDuYI6onXKJE_YrqVC3lzU0u194H2ke4_5MZa5I/edit?usp=sharing"
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
