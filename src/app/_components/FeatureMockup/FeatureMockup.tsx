import Image, { ImageProps } from 'next/image'
import styles from './featureMockup.module.scss'

interface FeatureMockupProps
	extends Omit<ImageProps, 'className' | 'width' | 'height'> {
	alt: string
	isMobile?: boolean
}

export default function FeatureMockup({
	alt,
	isMobile,
	...props
}: FeatureMockupProps) {
	return (
		<Image
			className={`${styles.image} ${isMobile ? styles.isMobile : ''}`}
			alt={alt}
			width={1918}
			height={908}
			unoptimized
			{...props}
		/>
	)
}
