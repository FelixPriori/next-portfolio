import FeatureLogo from '../FeatureLogo/FeatureLogo'
import { Mark, Paragraph } from '../Paragraph'
import styles from './workFeature.module.scss'

interface WorkFeatureProps {
	companyName: string
	dateRange: string
	descriptionTitle: string
	description: string
	logoSrc: string
	position?: string
}

export default function WorkFeature({
	companyName,
	position,
	dateRange,
	descriptionTitle,
	description,
	logoSrc,
}: WorkFeatureProps) {
	return (
		<div>
			<div className={styles.workLogoWrapper}>
				<FeatureLogo
					companyName={companyName}
					alt={`${companyName} Logo`}
					src={logoSrc}
				/>
				<div>
					<h3 className={styles.companyName}>{companyName}</h3>
					<p className={`${styles.paragraph} ${styles.position}`}>{position}</p>
					<p className={styles.dateRange}>{dateRange}</p>
				</div>
			</div>
			<Paragraph>
				<Mark>{descriptionTitle}</Mark>. {description}
			</Paragraph>
		</div>
	)
}
