import Image from 'next/image'
import styles from './testimonialFeature.module.scss'

interface TestimonialFeatureProps {
	personName: string
	position: string
	text: string
	photoSrc: string
}

export default function TestimonialFeature({
	personName,
	position,
	text,
	photoSrc,
}: TestimonialFeatureProps) {
	return (
		<div className={styles.testimonialFeatureWrapper}>
			<Image
				className={styles.image}
				src={photoSrc}
				alt={`${personName}'s Photo`}
				width={1080}
				height={1080}
			/>
			<h3 className={styles.name}>{personName}</h3>
			<p className={styles.position}>{position}</p>
			<blockquote className={styles.quote}>{text}</blockquote>
		</div>
	)
}
