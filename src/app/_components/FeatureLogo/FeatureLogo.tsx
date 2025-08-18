import Image, { ImageProps } from 'next/image'
import styles from './featureLogo.module.scss'
import { Icon, SvgIcon } from '../SvgIcon'

interface FeatureLogoProps
	extends Omit<ImageProps, 'className' | 'width' | 'height'> {
	alt: string
	companyName: string
}

export default function FeatureLogo({
	alt,
	companyName,
	...props
}: FeatureLogoProps) {
	if (companyName === 'Independant') {
		return (
			<div className={styles.reactIcon}>
				<SvgIcon icon={Icon.INDEPENDENT} />
			</div>
		)
	} else if (companyName === 'The future') {
		return (
			<div className={styles.reactIcon}>
				<SvgIcon icon={Icon.ROCKET} />
			</div>
		)
	}

	return (
		<Image
			className={styles.image}
			alt={alt}
			width={75}
			height={75}
			{...props}
		/>
	)
}
