import Image, { ImageProps } from 'next/image'
import styles from './logo.module.scss'

interface LogoProps extends Omit<ImageProps, 'className' | 'width' | 'height'> {
	alt: string
}

export default function Logo({ alt, ...props }: LogoProps) {
	return (
		<Image
			className={styles.image}
			alt={alt}
			width={20}
			height={20}
			{...props}
		/>
	)
}
