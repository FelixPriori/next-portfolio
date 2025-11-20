import { ButtonExternalLink } from '../Button'
import { FeatureMockup } from '../FeatureMockup'
import { LogoItemProps } from '../Logo/LogoItem'
import LogoList from '../Logo/LogoList'
import { Paragraph } from '../Paragraph'
import styles from './projectFeature.module.scss'

interface ProjectFeatureProps {
	title: string
	desktopImage: string
	mobileImage: string
	website: string
	projectType: string
	description: string
	technilogiesTitle: string
	visitButtonText: string
	technologies: LogoItemProps[]
}

export default function ProjectFeature({
	title,
	desktopImage,
	mobileImage,
	website,
	projectType,
	description,
	technologies,
	technilogiesTitle,
	visitButtonText,
}: ProjectFeatureProps) {
	return (
		<div className={styles.projectLogoWrapper}>
			<div>
				<FeatureMockup alt={`${title} Desktop Showcase`} src={desktopImage} />
				<FeatureMockup
					alt={`${title} Mobile Showcase`}
					src={mobileImage}
					isMobile
				/>
			</div>
			<div>
				<h3 className={styles.projectName}>{title}</h3>
				<p className={`${styles.paragraph} ${styles.projectType}`}>
					{projectType}
				</p>
			</div>

			<Paragraph>{description}</Paragraph>

			<ButtonExternalLink
				target="_black"
				rel="noreferrer noopener"
				href={website}
			>
				{visitButtonText}
			</ButtonExternalLink>
			<div>
				<h4 className={styles.technologiesTitle}>{technilogiesTitle}</h4>
				<LogoList logoList={technologies} />
			</div>
		</div>
	)
}
