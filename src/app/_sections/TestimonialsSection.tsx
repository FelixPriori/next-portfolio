import { TestimonialFeature } from '@/app/_components'
import styles from './sections.module.scss'
import { DictionaryType } from '@/dictionaries'

export default function TestimonialsSection({
	testimonialsSection,
}: {
	testimonialsSection: DictionaryType['testimonialsSection']
}) {
	return (
		<section id="testimonials" className={`${styles.sectionWrapper} section`}>
			<div className={styles.subtitleWraper}>
				<h2 className={styles.subtitle}>{testimonialsSection.title}</h2>
			</div>
			<div className={styles.testimonialsWrapper}>
				{testimonialsSection.testimonials.map(testimonial => (
					<TestimonialFeature key={testimonial.personName} {...testimonial} />
				))}
			</div>
		</section>
	)
}
