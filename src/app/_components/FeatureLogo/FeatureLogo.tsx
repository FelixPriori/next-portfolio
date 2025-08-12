import Image, { ImageProps } from 'next/image'
import styles from './featureLogo.module.scss'

interface FeatureLogoProps
	extends Omit<ImageProps, 'className' | 'width' | 'height'> {
	alt: string
}

export default function FeatureLogo({ alt, ...props }: FeatureLogoProps) {
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
