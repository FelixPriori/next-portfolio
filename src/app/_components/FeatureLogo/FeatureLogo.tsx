import Image, { ImageProps } from 'next/image'
import styles from './featureLogo.module.scss'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { GoRocket } from 'react-icons/go'

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
				<HiOutlineDesktopComputer />
			</div>
		)
	} else if (companyName === 'The future') {
		return (
			<div className={styles.reactIcon}>
				<GoRocket />
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
