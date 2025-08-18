import { FeatureLogo } from '../FeatureLogo'
import { Paragraph } from '../Paragraph'
import styles from './trainingFeature.module.scss'

interface TrainingFeatureProps {
	companyName: string
	certificate: string
	dateRange: string
	description: string
	logoSrc: string
}

export default function TrainingFeature({
	companyName,
	certificate,
	dateRange,
	description,
	logoSrc,
}: TrainingFeatureProps) {
	return (
		<div>
			<div className={styles.featureLogoWrapper}>
				<FeatureLogo
					companyName={companyName}
					src={logoSrc}
					alt={`${companyName}'s logo`}
				/>
				<div>
					<h3 className={styles.companyName}>{companyName}</h3>
					<p className={`${styles.paragraph} ${styles.position}`}>
						{certificate}
					</p>
					<p className={styles.dateRange}>{dateRange}</p>
				</div>
			</div>
			<Paragraph>{description}</Paragraph>
		</div>
	)
}
