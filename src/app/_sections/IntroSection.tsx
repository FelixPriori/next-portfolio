import Image from 'next/image'
import {
	ButtonExternalLink,
	ButtonLink,
	ButtonVariant,
	Socials,
	ToggleTheme,
} from '@/app/_components'
import styles from './sections.module.scss'
import { DictionaryType } from '@/dictionaries'

export default function IntroSection({
	introSection,
}: {
	introSection: DictionaryType['introSection']
}) {
	return (
		<section className={`${styles.headerSection} section`} id="intro">
			<ToggleTheme />
			<div className={styles.heroWrapper}>
				<div className={styles.textWrapper}>
					<div className={styles.textInnerWrapper}>
						<h1 className={styles.title}>{introSection.title}</h1>
						<h2 className={styles.introSubtitle}>{introSection.subtitle}</h2>
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
						<ButtonLink href="#contact">
							{introSection.buttons.contact}
						</ButtonLink>
						<ButtonExternalLink
							href={introSection.buttons.resumeLink}
							target="_blank"
							rel="noreferrer"
							variant={ButtonVariant.YELLOW}
						>
							{introSection.buttons.resume}
						</ButtonExternalLink>
					</div>
				</div>
			</div>
		</section>
	)
}
